import mongoose from 'mongoose';

/* eslint-disable require-jsdoc */
export class Driver { // To Fix
}

export class MongooseDriver extends Driver { // To fix
  constructor(mongooseConnectionString) {
    super();
    this.module = mongoose;
    this.connectionString = mongooseConnectionString;

    this.connect = this.connect.bind(this);
    this.desconnect = this.desconnect.bind(this);
  }
  connect() {
    this.module.connect(this.connectionString, {useUnifiedTopology: true});
    this.module.connection.on('error', () => {
      // throw Error('Mongoose connection error');
      console.log('Can not connect with module');
    });
  }
  desconnect() {
    this.module.connection.close();
  }
}

export class LinklMongooseDriver extends MongooseDriver {
  constructor(mongooseConnectionString) {
    super(mongooseConnectionString);
    this.linklySchema = new this.module.Schema(({
      fullLink: String,
      shortLink: String,
    }));
    this.LinklyModel = this.module.model('link', this.linklySchema);

    this.save = this.save.bind(this);
    this.find = this.find.bind(this);
  }
  save(data, callback) {
    const ModelToSave = new this.LinklyModel({
      fullLink: data.fullLink,
      shortLink: data.shortLink,
    });
    if ((data.fullLink && data.shortLink)) { // poor validation
      this.find(data.shortLink, (err, resul) => {
        // eslint-disable-next-line max-len
        console.log('resultado da pesquisa para inclusão foi: ' + resul + ' e o erro: ' + err);
        if (resul) {
          console.log('Entrou em na condição');
          callback(null, 1); // Already registred
        } else {
          ModelToSave.save((err) => {
            if (err) {
              callback(err); // Erro
            }
            callback(null, 0); // Ok
          });
        }
      });
    } else {
      console.log('Um dos campos está vazil!');
      callback(null, 2); // One of inputs does not have data
    }
  }
  find(query, callback) {
    const MondelToFind = this.LinklyModel;
    MondelToFind.findOne({shortLink: query}, (err, resul) => {
      callback(err, resul);
    });
  }
}

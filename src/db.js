/* eslint-disable require-jsdoc */
import mongoose from 'mongoose';
import EventEmitter from 'events';

class Drive { // To Fix
}

export class MongooseDrive extends Drive {
  constructor(connectionString) {
    super();
    this.db = mongoose;
    this.connectionString = connectionString;
    // ---
    this.linklySchema = new this.db.Schema(({
      fullLink: String,
      shortLink: String,
    }));
    this.LinklyModel = this.db.model('link', this.linklySchema);
    // ---

    this.connect = this.connect.bind(this);
    this.desconnect = this.desconnect.bind(this);
    this.save = this.save.bind(this);
    this.find = this.find.bind(this);
  }
  connect() {
    this.db.connect(this.connectionString, {useUnifiedTopology: true});
    this.db.connection.on('error', () => {
      // throw Error('Mongoose connection error');
      console.log('Can not connect with Db');
    });
  }
  desconnect() {
    this.db.connection.close();
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

export default class Db {
  constructor(drive) {
    this.drive = drive;

    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.save = this.save.bind(this);
    this.find = this.find.bind(this);
    this.linten = this.listen.bind(this);
  }
  connect() {
    this.drive.connect();
  }
  disconnect() {
    this.drive.disconnect();
  }
  save(data, callback) {
    this.drive.save(data, callback);
  }
  find(query, callback) {
    this.drive.find(query, callback);
  }
  listen(eventEmitter) {
    eventEmitter.on('save', (data, callback) => {
      this.save(data, callback);
    });
    eventEmitter.on('find', (query, callback) => {
      this.find(query, callback);
    });
    eventEmitter.on('error', (err) => {
      console.log(err);
    });
  }
}

export const DbEvents = new EventEmitter();

/* eslint-disable require-jsdoc */
import mongoose from 'mongoose';

export class NosqlDriver {
}

export class MongooseNosqlDriver extends NosqlDriver {
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
      throw Error('Mongoose connection error');
      // console.log('Can not connect with module');
    });
  }
  desconnect() {
    this.module.connection.close();
  }
}

/* eslint-disable require-jsdoc */
import EventEmitter from 'events';

export default class Db {
  constructor(driver) {
    this.driver = driver;

    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.save = this.save.bind(this);
    this.find = this.find.bind(this);
    this.linten = this.listen.bind(this);
  }
  connect() {
    this.driver.connect();
  }
  disconnect() {
    this.driver.disconnect();
  }
  save(data, callback) {
    this.driver.save(data, callback);
  }
  find(query, callback) {
    this.driver.find(query, callback);
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

export const DbEvent = new EventEmitter();

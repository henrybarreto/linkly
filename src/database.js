/* eslint-disable require-jsdoc */
import EventEmitter from 'events';

export default class Db {
  constructor(driver) {
    this.driver = driver;
  }
  connect() {
    this.driver.connect();
  }
  disconnect() {
    this.driver.disconnect();
  }
  listen(DbEvent) {
    DbEvent.on('save', (model, data, callback) => {
      model.save(data, callback);
    });
    DbEvent.on('find', (model, query, callback) => {
      model.find(query, callback);
    });
  }
}

export const DbEvent = new EventEmitter();

/* eslint-disable require-jsdoc */
import {DbEvent} from '../database';
import LinkModel from '../models/LinkModel';

export default class LinkService {
  constructor() {
    this.model = new LinkModel();
  }
  save(data, callback) {
    DbEvent.emit('save', this.model, data, callback);
    // DbEvent.emit('save', data, callback);
  }
  find(query, callback) {
    DbEvent.emit('find', this.model, query, callback);
    // DbEvent.emit('find', query, callback);
  }
}

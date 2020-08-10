/* eslint-disable require-jsdoc */
import {DbEvent} from '../../db/db';

export default class LinkModel {
  save(data, callback) {
    DbEvent.emit('save', data, callback);
  }
  find(query, callback) {
    DbEvent.emit('find', query, callback);
  }
}

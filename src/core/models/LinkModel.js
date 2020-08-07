/* eslint-disable require-jsdoc */
import {DbEvents} from '../../db';

export default class LinkModel {
  save(data, callback) {
    DbEvents.emit('save', data, callback);
  }
  find(query, callback) {
    DbEvents.emit('find', query, callback);
  }
}

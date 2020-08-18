/* eslint-disable require-jsdoc */
import mongoose from 'mongoose';

export class Model { // To Fix
}

export default class LinkModel extends Model {
  constructor() {
    super();
    this.module = mongoose;
    this.linkSchema = new this.module.Schema(({
      fullLink: String,
      shortLink: String,
    }));
    this.LinkModel = this.module.model('link', this.linkSchema);

    this.save = this.save.bind(this);
    this.find = this.find.bind(this);
  }
  save(data, callback) {
    const ModelToSave = new this.LinkModel({
      fullLink: data.fullLink,
      shortLink: data.shortLink,
    });
    if ((data.fullLink && data.shortLink)) { // poor validation and poor code;
      this.find(data.shortLink, (err, resul) => { // to fix
        // eslint-disable-next-line max-len
        // console.log('resultado da pesquisa para inclusão foi: ' + resul + ' e, se ouver error, error: ' + err);
        if (resul) {
          // console.log('Entrou em na condição');
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
      // console.log('Um dos campos está vazil!');
      callback(null, 2); // One of inputs do not have data
    }
  }
  find(query, callback) {
    const MondelToFind = this.LinkModel;
    MondelToFind.findOne({shortLink: query}, (err, resul) => {
      callback(err, resul);
    });
  }
}

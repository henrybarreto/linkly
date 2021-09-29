import pkg from 'mongoose';
const {Schema, model} = pkg;

const schema = new Schema({
  link: {
    type: 'String',
    required: true,
    trim: true,
    lowercase: true,
  },
  shortLink: {
    type: 'String',
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    dropDups: true,
  },
  author: {
    type: 'String',
    required: true,
    trim: true,
    lowercase: true,
  },
});

const Model = model('Link', schema);


export default Model;

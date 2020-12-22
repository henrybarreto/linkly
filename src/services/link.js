// import link from '../controllers/link';
import { response } from 'express';
import Model from '../models/link';

async function getLink(shortLink) {
  try {
    let linkFinded = await Model.findOne({
      shortLink
    }).exec();
    return linkFinded;
  } catch (error) {
    console.warn(error);
    return undefined;
  }
}

async function createLink(link, shortLink, author) {
  try {
    let linkToSave = new Model({
      link,
      shortLink,
      author  
    });
    await linkToSave.save();
    return linkToSave;
  } catch(error) {
    return undefined;
  }
}

function deleteLink(shortlink) {  
}

export {getLink, createLink, deleteLink}
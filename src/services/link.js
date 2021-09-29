// import link from '../controllers/link';
import Model from '../models/link.js';

// eslint-disable-next-line require-jsdoc
async function getLink(shortLink) {
  try {
    const linkFinded = await Model.findOne({
      shortLink,
    }).exec();
    return linkFinded;
  } catch (error) {
    console.warn(error);
    return undefined;
  }
}

// eslint-disable-next-line require-jsdoc
async function createLink(link, shortLink, author) {
  try {
    const linkToSave = new Model({
      link,
      shortLink,
      author,
    });
    await linkToSave.save();
    return linkToSave;
  } catch (error) {
    return undefined;
  }
}

// eslint-disable-next-line require-jsdoc
function deleteLink(shortlink) {
  // TODO
}

export {getLink, createLink, deleteLink};

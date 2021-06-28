import {getLink, createLink} from '../services/link';
import {
  responseJSON200Status,
  responseJSON202Status,
  responseJSON400Status,
  responseJSON404Status,
  responseJSON500Status,
} from '../services/http';

// eslint-disable-next-line require-jsdoc
async function get(request, response, next) {
  try {
    const shortLink = request.params.link;
    if (!shortLink) {
      responseJSON400Status(response, {message: 'Invalid input'});
      return;
    }
    const linkGot = await getLink(shortLink);
    linkGot ?
    responseJSON200Status(response, {linkGot, code: 2} ) :
    responseJSON404Status(response, {message: 'Not found!', code: 3});
  } catch (error) {
    responseJSON500Status(response);
  } finally {
    next();
  }
}

async function post(request, response, next) {
  try {
    const {link, shortLink, author} = request.body;
    if (!link || !shortLink || !author) {
      responseJSON400Status(response, {message: 'Invalid inputs'});
      return;
    }
    await createLink(link, shortLink, author) ?
    responseJSON202Status(response, {message: 'Created', code: 0} ) :
    responseJSON200Status(response, {message: 'Already exist', code: 1});
  } catch (error) {
    console.log(error);
    // mongoose error handler
  } finally {
    next();
  }
}

// eslint-disable-next-line require-jsdoc
function del(request, response, next) {
  // TODO
  next();
}

export default {get, post, del};

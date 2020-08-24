/* eslint-disable require-jsdoc */
import LinkView from '../views/LinkView';
import LinkService from '../services/LinkService';

export default class LinkController {
  constructor() {
    this.data = {};
    this.view = new LinkView();
    this.service = new LinkService();
    this.path = {
      get: '/:link',
      post: '/link',
    };

    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
  }

  get(req, res) {
    const shortLinkRegEx = new RegExp(req.params.link);
    this.service.find(shortLinkRegEx, (err, resul) => {
      if (resul) {
        res.status(302);
        res.redirect(resul.fullLink);
        // Going to template file, then redirect to link
      } else {
        res.status(404);
        res.redirect('/');
      }
    });
  }

  post(req, res) {
    res.setHeader('Content-Type', 'application/json');
    try {
      this.service.save(
          {fullLink: req.body.fullLink, shortLink: req.body.shortLink},
          (err, resul) => {
            switch (resul) {
              case 0:
                res.status(201);
                res.json({status: 0, msg: 'Registred!'});
                break;
              case 1:
                res.status(202);
                res.json({status: 1, msg: 'Already registred!'});
                break;
              case 2:
                res.status(204);
                res.json({status: 2, msg:
                  'Either one or both input are empty'});
                break;
              default:
                res.status(500);
                res.json({status: 3, msg: 'Error controller'});
                break;
            }
          },
      );
    } catch (e) {
      console.log(e);
    }
  }
}

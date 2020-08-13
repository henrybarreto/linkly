/* eslint-disable require-jsdoc */
import LinkView from '../views/LinkView';
import LinkModel from '../models/LinkModel';

export default class LinkController {
  constructor() {
    this.data = {};
    this.view = new LinkView();
    this.model = new LinkModel();
    this.path = {
      get: '/:link',
      post: '/link',
    };

    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
  }

  get(req, res) {
    const shortLinkRegEx = new RegExp(req.params.link);
    this.model.find(shortLinkRegEx, (err, resul) => {
      if (resul) {
        res.redirect(resul.fullLink);
        // Going to template file, then redirect to link
      } else {
        res.redirect('/');
      }
    });
  }

  post(req, res) {
    res.setHeader('Content-Type', 'application/json');
    try {
      this.model.save(
          {fullLink: req.body.fullLink, shortLink: req.body.shortLink},
          (err, resul) => {
            switch (resul) {
              case 0:
                res.json({status: 0, msg: 'Registred!'});
                break;
              case 1:
                res.json({status: 1, msg: 'Already registred!'});
                break;
              case 2:
                res.json({status: 2, msg:
                  'Either one or both input are empty'});
                break;
              default:
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

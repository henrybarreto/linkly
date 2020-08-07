/* eslint-disable require-jsdoc */
import AboutView from '../views/AboutView';

export default class AboutController {
  constructor() {
    this.data = {
      lang: 'pt_BR',
      title: 'Linkly'};
    this.view = new AboutView();
    this.path = {
      get: '/about',
    };

    this.get = this.get.bind(this);
  }
  get(req, res) {
    res.render(this.view.template, this.data);
  }
}

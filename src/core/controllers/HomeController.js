/* eslint-disable require-jsdoc */
import HomeView from '../views/HomeView';

export default class HomeController {
  constructor() {
    this.data = {
      lang: 'pt_BR',
      title: 'Linkly'};
    this.view = new HomeView();
    this.path = {
      get: '/',
    };

    this.get = this.get.bind(this);
  }
  get(req, res) {
    res.render(this.view.template, this.data);
  }
}

import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
      rootURL: config.rootURL,

      // https://romulomachado.github.io/2016/12/20/resetting-scroll-on-route-changes.html
      didTransition() {
          this._super(...arguments);
          window.scrollTo(0, 0);
      }
});

Router.map(function() {
    this.route("results");
    this.route("publications");
});

export default Router;

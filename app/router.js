import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL,

    init() {
        // Different from didTransistion hook so that sub-routes
        // do not have to always bubble their didTransition event
        this.on("didTransition", () => {
            window.scrollTo(0, 0);
        });
        this._super(...arguments);
    }
});

Router.map(function() {
    this.route("results");
    this.route("publications");
    this.route("not-found", { path: "*" });
});

export default Router;

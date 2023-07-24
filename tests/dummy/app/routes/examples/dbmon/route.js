import Route from '@ember/routing/route';
import { later, next, cancel } from '@ember/runloop';
import getData from 'dummy/lib/get-data';

export default class ExamplesDbmonRoute extends Route {
  numRows = 100;
  _nextLoad = null;

  model() {
    return getData(this.numRows);
  }

  loadSamples(controller) {
    if (controller.isDestroyed || controller.isDestroying) {
      return;
    }
    controller.set('model', getData(this.numRows));
    this._nextLoad = next(this, this.loadSamples.bind(this, controller));
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    later(this, this.loadSamples.bind(this, controller), 100);
  }

  resetController(controller, isExiting, transition) {
    super.resetController(controller, isExiting, transition);

    if (isExiting && transition.targetName !== 'error') {
      cancel(this._nextLoad);
      controller.set('model', null);
    }
  }
}

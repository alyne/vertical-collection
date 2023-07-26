import Route from '@ember/routing/route';
import { A } from '@ember/array';
import getNumbers from 'dummy/lib/get-numbers';

export default class InfiniteScrollRoute extends Route {
  model() {
    return {
      numbers: A(getNumbers(0, 100)),
      first: 0,
      last: 100,
    };
  }

  resetController(controller, isExiting, transition) {
    super.resetController(controller, isExiting, transition);

    if (isExiting && transition.targetName !== 'error') {
      controller.set('model', null);
    }
  }
}

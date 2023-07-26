import Route from '@ember/routing/route';
import getNumbers from 'dummy/lib/get-numbers';

export default class ExamplesReduceDebugRoute extends Route {
  model() {
    const numbers = getNumbers(0, 50);
    return {
      numbers,
      first: 0,
      last: 50,
      filtered: numbers,
    };
  }

  resetController(controller, isExiting, transition) {
    super.resetController(controller, isExiting, transition);

    if (isExiting && transition.targetName !== 'error') {
      controller.set('model', null);
    }
  }
}

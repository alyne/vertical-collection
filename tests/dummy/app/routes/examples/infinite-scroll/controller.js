import Controller from '@ember/controller';
import { action, set } from '@ember/object';
import getNumbers from 'dummy/lib/get-numbers';

export default class InfiniteScrollController extends Controller {
  numImages = 5;
  someProperty = 50;

  @action
  loadAbove() {
    let first = this.model.first;
    let numbers = getNumbers(first - 20, 20);
    let model = this.model.numbers;
    model.unshiftObjects(numbers);
    // this.set('model.numbers', newModel);
    set(this, 'model.first', first - 20);
  }

  @action
  loadBelow() {
    let last = this.model.last;
    let numbers = getNumbers(last, 20);
    let model = this.model.numbers;
    model.pushObjects(numbers);
    // this.set('model.numbers', newModel);
    set(this, 'model.last', last + 20);
  }
}

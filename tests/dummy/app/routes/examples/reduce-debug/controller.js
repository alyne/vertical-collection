import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ExamplesReduceDebugController extends Controller {
  numImages = 50;
  isFiltered = false;

  @action
  filter() {
    const model = this.model.numbers;
    this.isFiltered = !this.isFiltered;

    if (!this.isFiltered) {
      this.model.set('filtered', model);
    } else {
      const filtered = model.filter((item) => item.number < 25);
      this.model.set('filtered', filtered);
    }
  }
}

import Model, { attr } from '@ember-data/model';

export default class NumberItemModel extends Model {
  @attr('number') number;

  get prefixed() {
    return `${this.number}dsa`;
  }
}

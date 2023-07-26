import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AcceptanceTestsRecordArrayController extends Controller {
  @service store;

  @tracked prefixed = true;
  @tracked vcShown = true;
  @tracked partial = undefined;
  @tracked firstVisibleId = undefined;

  get items() {
    return this.partial || this.model;
  }

  @action
  updateItems() {
    this.store.unloadAll('number-item');
    this.store.query('number-item', { length: 5 });
  }

  @action
  showLast(count) {
    const { length } = this.model;
    this.partial = this.model.slice(length - count);
  }

  @action
  showAll() {
    this.partial = undefined;
  }

  @action
  showPrefixed() {
    this.prefixed = !this.prefixed;
  }

  @action
  hideVC() {
    this.vcShown = false;
  }

  @action
  showVC() {
    this.vcShown = true;
  }

  @action
  firstVisibleChanged(item) {
    this.firstVisibleId = item.id;
  }
}

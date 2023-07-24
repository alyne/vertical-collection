import Controller from '@ember/controller';
import config from 'dummy/config/environment';
import { VERSION } from '@ember/version';

export default class IndexRoute extends Controller {
  version = config.VERSION;
  emberVersion = VERSION;
}

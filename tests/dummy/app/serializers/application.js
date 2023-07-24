import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  normalizeResponse(_, __, payload) {
    return payload;
  }
}

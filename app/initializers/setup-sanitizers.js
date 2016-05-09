import Ember from 'ember';

export default {
  name: 'ember-sanitize-setup-sanitizers',

  initialize: function(container) {
    if (container.registerOptionsForType) {
      // Ember 2.1+
      container.registerOptionsForType('sanitizer', { instantiate: false });
    } else {
      // Ember 1.13
      container.optionsForType('sanitizer', { instantiate: false });
    }
  }
};

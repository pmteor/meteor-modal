Package.describe({
  name: 'pmteor:modal',
  version: '0.0.2',
  summary: 'Modal package for Meteor.',
  git: 'https://github.com/pmteor/meteor-modal.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');

  // Meteor-provided packages
  api.use([
    'ecmascript',
    'underscore',
    'templating',
    'tracker',
    'less',

    // packages
    'manuel:reactivearray@1.0.5'
  ]);

  // LESS
  api.addFiles('styles.less', 'client');

  // HTML
  api.addFiles('templates.html', 'client');

  // EXPORT MODAL CLASS.
  api.mainModule('modal.js', 'client');
});

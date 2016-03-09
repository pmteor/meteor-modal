Package.describe({
  name: 'pmteor:modal',
  version: '0.0.1',
  summary: 'Modal package for Meteor.',
  git: 'https://github.com/pmteor/meteor-modal.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');

  // Meteor-provided packages
  api.use([
    'underscore',
    'templating',
    'tracker',
    'less'
  ], ['client', 'server']);

  // MODAL FILES
  api.addFiles([
    'templates.html',
    'styles.less',
    'modal.js'
  ], 'client');

  // EXPORT MODAL CLASS.
  api.export('Modal');
});

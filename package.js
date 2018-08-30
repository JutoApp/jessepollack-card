Package.describe({
  name: 'juto:jessepollack-card',
  version: '1.0.1',
  // Brief, one-line summary of the package.
  summary: 'A meteor wrapper for jessepollak.github.io/card credit card UI',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/JutoApp/jessepollack-card',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "node.extend": "1.1.3",
  "qj": "2.0.0",
  "payment": "2.0.3"
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.4.1');

  var path = Npm.require('path');
  api.use(['ecmascript'],['client']);
  api.addFiles([
    'card.js',
    'jquery.card.js',
    'card.css'
  ],['client']);
});

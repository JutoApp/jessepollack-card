Package.describe({
  name: 'juto:jessepollack-card',
  version: '1.0.0',
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
  api.use(['ecmascript','coffeescript','fourseven:scss@3.8.0_1'],['client']);
  api.imply(['fourseven:scss@3.8.0_1','wolves:bourbon@3.1.0'],['client']);
  api.addFiles([
    path.join('lib','coffee','card.coffee'),
    path.join('lib','coffee','jquery.card.coffee'),
    path.join('lib','scss','_mixins.scss'),
    path.join('lib','scss','browsers','_ie.scss'),
    path.join('lib','scss','browsers','_safari.scss'),
    path.join('lib','scss','cards','_amex.scss'),
    path.join('lib','scss','cards','_card.scss'),
    path.join('lib','scss','cards','_dankort.scss'),
    path.join('lib','scss','cards','_discover.scss'),
    path.join('lib','scss','cards','_elo.scss'),
    path.join('lib','scss','cards','_maestro.scss'),
    path.join('lib','scss','cards','_mastercard.scss'),
    path.join('lib','scss','cards','_visa.scss'),
    path.join('lib','scss','logos','_amex.scss'),
    path.join('lib','scss','logos','_dankort.scss'),
    path.join('lib','scss','logos','_discover.scss'),
    path.join('lib','scss','logos','_elo.scss'),
    path.join('lib','scss','logos','_logo.scss'),
    path.join('lib','scss','logos','_maestro.scss'),
    path.join('lib','scss','logos','_mastercard.scss'),
    path.join('lib','scss','logos','_visa.scss'),
    path.join('lib','scss','card.scss')
    
  ],['client']);
});

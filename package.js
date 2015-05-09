var where = ['server'];
Package.describe({
  name: 'udondan:yml',
  summary: 'A YAML 1.2 parser and serializer. Converts YAML files to JSON and JS objects to YAML.',
  version: '3.3.0',
  git: 'https://github.com/udondan/meteor-yml.git',
  documentation: 'README.md',
  environments: where
});

Npm.depends({
  'js-yaml': '3.3.0'
});

Package.on_use(function (api) {
  api.versionsFrom('1.0.4.1');
  api.add_files('lib/yml.js', where);
  api.export(['YAML'], where);
});

Package.onTest(function (api) {
  api.use([
    'tinytest',
    'udondan:yml'
    ]);
  api.addFiles([
    'lib/yml-test.js',
    'lib/file.yml'
  ], where);
});

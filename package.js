var where = ["server"];
Package.describe({
  summary: "A YAML 1.2 parser and serializer. Converts YAML files to JSON and JS objects to YAML.",
  environments: where
});

Npm.depends({
  'js-yaml': '3.1.0'
});

Package.on_use(function (api) {
  api.add_files('lib/yml.js', where);
  api.export(['YAML'], where);
});

var where = ["server"];
Package.describe({
  summary: "A YAML 1.2 parser and serializer. Converts YAML files to JSON and JS objects to YAML.",
  version: "3.2.2_1",
  git: "https://github.com/udondan/meteor-yml.git",
  environments: where
});

Npm.depends({
  'js-yaml': '3.2.2'
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.add_files('lib/yml.js', where);
  api.export(['YAML'], where);
});

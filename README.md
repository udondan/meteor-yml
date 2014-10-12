yml
==========

A YAML 1.2 parser and serializer for [Meteor][1]. Converts YAML files to JSON and JS objects to YAML.

This package packs [js-yaml][2] 3.2.2 for Meteor. See the [online demo][3] for the capabilities of this packages, including anchors, references and hash merging.

##Installation

```
meteor add udondan:yml
```

##Quick examples

###Convert YAML file to JSON

```js
var fs = Npm.require('fs');

try {
  var data = YAML.safeLoad(fs.readFileSync('/path/to/file.yml', 'utf8'));
  console.log(data);
} catch (e) {
  console.log(e);
}
```

###Convert JS object to YAML

```js
var data = {
  "some": "data"
}

var yml = YAML.safeDump(data);
console.log(yml);
```

Full API documentation on the github page of [js-yaml][3].

##License: [MIT][4]

  [1]: https://www.meteor.com/
  [2]: https://github.com/nodeca/js-yaml
  [3]: http://nodeca.github.io/js-yaml/
  [4]: https://github.com/udondan/meteor-yml/blob/master/LICENSE

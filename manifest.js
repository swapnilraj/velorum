/**
 * Manifest template
 */

const {
  existsSync,
  mkdirSync,
  writeFileSync,
} = require('fs');

const {
  join,
} = require('path');

const {
  version,
} = require('./package.json');

const buildFolder = join(__dirname, 'build');

const buildExists = existsSync(buildFolder);

const manifest = {
  "manifest_version": 2,
  "name": "Velorum",
  "version": version,
  "description": "Saves specified messages on Facebook messenger",
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["./content.js"]
    }
  ],
  "permissions": [
      "activeTab"
  ]
};

if (!buildExists) {
  mkdirSync(buildFolder);
}

writeFileSync(join(buildFolder, 'manifest.json'), JSON.stringify(manifest, undefined, 4));
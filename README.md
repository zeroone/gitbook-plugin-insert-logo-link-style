GitBook plugin: Insert logo Link Style
======================================

NPM package [here](https://www.npmjs.com/package/gitbook-plugin-insert-logo-link-style)

```
npm i gitbook-plugin-insert-logo-link-style
```

The following plugin inserts a logo into the navigation bar (above the summary and above the search input). Simply, drop a `logo.png` file into the root folder of your GitBook and add this plugin into your `book.json`:

```json
{
    "plugins": ["insert-logo-link-style"]
}
```

You will also need to provide url for the logo. The url can be local file, a remote URL, or base64 hash. Add the url into the plugin configuration in your `book.json`:

```json
{
    "plugins": ["insert-logo-link-style"],
    "pluginsConfig": {
        "insert-logo-link-style": {
            "src": "http://www.example.com/logo.png",
            "style": "background: none;",
            "link": "http://www.example.com"
        }
    }
}
```

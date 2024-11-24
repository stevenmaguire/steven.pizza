## steven.pizza

If you are looking for a way to say "thank you", "I appreciate you", "I owe you one", or any other sentiment of gratitude, powered by [Jigsaw](https://jigsaw.tighten.com/docs/installation/).

## getting started

### install dependencies

```bash
$ composer install
$ npm install
```

### build and preview the site

```bash
$ vendor/bin/jigsaw build
$ vendor/bin/jigsaw serve --port=8080
```

this will build the site into the `build_local` directory.

you can run those two commands in separate shells to work more efficiently.

to build in production mode into the `build_production` directory...

```bash
$ vendor/bin/jigsaw build production
$ vendor/bin/jigsaw serve production --port=8080
```

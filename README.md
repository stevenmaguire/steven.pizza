## shrinkage.fyi

The collection of knowledge about things that are perceived to be shrinking, powered by [Jigsaw](https://jigsaw.tighten.com/docs/installation/).

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

### frontend

current nothing is compiled or expected to build. some boilerplate bootstrap is included in the markup and a modest amount of css.

#### conserve CSS

the base of the styles come from bootstrap, but it is bloated and we don't need much. When expanding the scope of styles needed follow this process:

1. include bootstrap in the site `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">`
2. get things the way you want it
3. use https://purifycss.online/ to extract out only the bits that matter
4. updated `source/_partials/css/bootstrap-light.blade.php` with the extracted styles

### architecture

currently, the expectation is that each publication live on its own subdomain. technically, the built site renders in subdirectories off the root domain - `http://localhost:8080/www/`.

when the site is built locally the page permalinks support this. when the site is built in production mode the page permalinks are updated to expect a subdomain -  - `http://www.localhost:8080/`.

## content roadmap

some possible topics to include related to shrinkage:

- candy bars
- animals
- glaciers
- islands
- your brain
- sexual freedom

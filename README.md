gulp-renvy
============

A configurable gulp plugin very inspired by [gulp-replace](https://www.npmjs.org/package/gulp-replace "gulp-replace") that replace text based upon an enviroment object.

## Install

Use npm for install the package

```javascript
npm install gulp-renvy
```

## How it works
In your gulpfile.js import gulp-renvy and call it in a pipe ```renvy(<placeholder object>,<enviroment:String>)```. For how to define a placeholder object look the example.

### Example
in the gulpfile.js
```javascript
var renvy = require('gulp-renvy');

var placeholder = {
    'BASE_HREF': {'production':'/rejseforsikring/',   'stage':'/rejseforsikring/'},
    'RAVEN_DEV': {'production':false,                 'stage':true},
    'API_PATH_P': {'production':'/api',               'stage':'/api-dev'},
};
// production and stage are the enviroments; BASE_HREF, RAVEN_DEV and API_PATH_P are the placeholders that you can place in your html code

gulp.task('html', function(){
    return gulp.src(html)
        .pipe(renvy(placeholder, 'stage'))
        .pipe(gulp.dest('.', { cwd: bases.dist }));
});

...

```

## TODO

- tests

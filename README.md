gulp-renvy
============

A configurable gulp plugin very inspired by gulp-replace that replace text based upon an enviroment object 

## Install

Use npm for install the package

```javascript
npm install gulp-renvy
```

## How it works
In your gulpfile.js import gulp-renvy and call it in a pipe ```logwarn()```. If you want, you can extend the strings to be checked by passing an array of strings as argument to logwarn ,something like ```logwarn(["console.debug","$log.info","DEBUG"])```

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
- clean up the code


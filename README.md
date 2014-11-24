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
    'BASE_HREF': {'mc':'/mc/travel/',   'production':'/rejseforsikring/',   'stage':'/rejseforsikring/',   'id': '/~ivan/travel/',         'ms': '/travel/'},
    'RAVEN_DEV': {'mc':true,            'production':false,                 'stage':true,                  'id':true,                      'ms': true},
    'API_PATH_P': {'mc':'/api-dev',      'production':'/api',                'stage':'/api-dev',            'id':'/~ivan/travel/api-dev',   'ms':'/api-dev'},
};
// mc production stage are the enviroments and BASE_HREF RAVEN_DEV API_PATH_P are the placeholders that you can place in your code

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


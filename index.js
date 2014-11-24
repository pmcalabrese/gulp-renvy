var es = require('event-stream');
var rs = require('replacestream');
var stream = require('stream');
 
module.exports = function(sd,env) {
 
	var doReplace = function(file, callback) {
	 
		var isRegExp = search instanceof RegExp;
		var isStream = file.contents && typeof file.contents.on === 'function' && typeof file.contents.pipe === 'function';
		var isBuffer = file.contents instanceof Buffer;
		 
		if (isRegExp && isStream) {
			return callback(new Error('gulp-replace: Cannot do regexp replace on a stream'), file);
		}
		 
		if (isStream) {
			for (search in sd) { // for
				var search = search;
				file.contents = file.contents.pipe(rs(search, sd[search][env]));
			}; // end for;
			 
			return callback(null, file);
		}
		 
		if (isBuffer) {
			if (isRegExp) {
				for (search in sd) { // for
					var search = search;
					file.contents = file.contents.pipe(rs(search, sd[search][env]));
				}; // end for;
			} else {
				for (search in sd) { // for
					var search = search;
					var replacement = sd[search][env];
					var chunks = String(file.contents).split(search);
					 
					var result;
					if (typeof replacement === 'function') {
						// Start with the first chunk already in the result
						// Replacements will be added thereafter
						// This is done to avoid checking the value of i in the loop
						result = [ chunks[0] ];
						 
						// The replacement function should be called once for each match
						for (var i = 1; i < chunks.length; i++) {
							// Add the replacement value
							result.push(replacement(search));
							 
							// Add the next chunk
							result.push(chunks[i]);
						}
						result = result.join('');
					} else {
						result = chunks.join(replacement);
					}
					 
					file.contents = new Buffer(result);
				}; // end for;
			}
			return callback(null, file);
		}
		callback(null, file);
	};
 
	return es.map(doReplace);
};

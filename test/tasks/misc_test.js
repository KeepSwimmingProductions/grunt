'use strict';

var grunt = require('../../lib/grunt');

// In case the grunt being used to test is different than the grunt being
// tested, initialize the task and config subsystems.
if (grunt.task.searchDirs.length === 0) {
  grunt.task.init([]);
  grunt.config.init({});
}

exports['config'] = function(test) {
  test.expect(2);
  test.deepEqual(grunt.helper('config'), grunt.config(), 'It should just pass through to config.');
  test.deepEqual(grunt.helper('config', 'meta'), grunt.config('meta'), 'It should just pass through to config.');
  test.done();
};

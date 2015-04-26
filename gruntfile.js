module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        bowercopy: {
            options: {
                runBower: true
                //clean: true
            },

            libs: {
                options: {
                    destPrefix: "libs"
                },

                files: {
                    "jquery.js": "jquery/jquery.js",
                    "require.js": "requirejs/require.js",
                    "text.js": "requirejs-text/text.js",
                    "knockout.js": "knockout.js/knockout.js"
                }
            }

        }
    });

    grunt.registerTask("default", []);
};
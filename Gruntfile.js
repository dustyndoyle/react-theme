var webpack = require( 'webpack' );
var webpackConfig = require( './webpack.config' );

module.exports = function( grunt ) {

    grunt.initConfig({

        sass: {
            dist: {
                files: {
                    'css/styles.min.css': 'resources/sass/custom/styles.scss'
                }
            },
            options: {
                sourceMap: true
            }
        },

        webpack: {
            options: webpackConfig,
            build: {
                plugins: webpackConfig.plugins.concat(
                    new webpack.optimize.DedupePlugin(),
                    new webpack.optimize.UglifyJsPlugin()
                ),
                output: {
                    path: "js/"
                }
            },
            "build-dev": {
                devtool: "sourcemap",
                debug: true
            },
            "watch-dev": {
                devtool: "sourcemap",
                debug: true,
                watch: true,
                keepalive: true
            }
        },

        watch:  {
            sass: {
                files: ['resources/sass/**/*.scss', 'resources/sass/**/**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'watch', 'webpack:watch-dev' ]);
    grunt.registerTask('build', [ 'sass', 'webpack:build']);
}
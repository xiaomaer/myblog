/**
 * Created by MMY on 2016/2/19.
 */
//css压缩和合并、js语法验证、js压缩和合并

module.exports = function (grunt) {
    grunt.initConfig({
        //压缩和合并css
        cssmin: {
            //压缩
            minify: {
                expand: true,
                cwd: 'css',
                src: ['*.css', '!*.min.css'],
                dest: 'css',
                ext: '.min.css'
            },
            //合并
            combine: {
                files: {
                    'css/concat.min.css': ['css/resetcss.css', 'css/xiaoma.css']
                }
            }
        },
        //验证js语法
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,//严格相等
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            },
            files: ['gruntfile.js', 'js/xiaoma.js']//验证的文件
        },
        //压缩和合并js
        uglify: {
            compress: {
                files: {
                    'js/xiaoma.min.js': ['js/xiaoma.js']
                }
            }
        },
        //压缩图片
        imagemin: {
            dynamic: {
                options: {                       // Target options
                    optimizationLevel: 3// 图片优化等级，3是默认值，取值区间0-7
                },
                files: [{
                    expand: true,//// 占位符以文件名扩充
                    cwd: 'imgmax',//压缩图片所在目录
                    src: ['**/*.{png,jpg,gif}'],// 要压缩的图片格式(img下的所有png,jpg,gif)
                    dest: 'img'//压缩后输出的目录
                }]
            }
        },
        //压缩html
        htmlmin: {
            compress: {
                options: {
                    removeComments: true,//移除注释
                    collapseWhitespace: true//合并空格
                },
                files: {//压缩文件
                    'home.min.html': 'home.html',
                    'article.min.html': 'article.html'
                }
            }
        },
        //监控css和js文件及imgmax文件夹下图片的变化
        watch: {
            css: {
                files: ['css/resetcss.css', 'css/xiaoma.css'],
                tasks: ['cssmin']
            },
            js: {
                files: ['js/xiaoma.js'],
                tasks: ['jshint', 'uglify']
            },
            img: {
                files: ['imgmax/*.{png,jpg,gif}'],
                tasks: ['imagemin']
            }
        },
        clean: {
            folder: ['path/to/dir/'],
            folder_v2: ['path/to/dir/**'],
            contents: ['path/to/dir/*'],
            subfolders: ['path/to/dir/*/'],
            css: ['path/to/dir/*.css'],
            all_css: ['path/to/dir/**/*.css']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['cssmin', 'jshint', 'uglify', 'imagemin', 'htmlmin', 'watch']);
};

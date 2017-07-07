var gulp = require('gulp');
var concat=require('gulp-concat');
var cssmin=require('gulp-minify-css');
var rename = require('rename');
var imagemin = require('gulp-imagemin');
var uglify=require('gulp-uglify');
var jshint=require('gulp-jshint');
var notify=require('gulp-notify');
/*压缩图片*/
//命令行输入 gulp images
gulp.task('images',function(){
	//找到图片
	gulp.src('./images/*.*')
	//压缩图片
		.pipe(imagemin({
			progressive:true
		}))
	//另存图片
		.pipe(gulp.dest("list/images"))
})




//css合并压缩处理
/*gulp.task('minifycss',function(){
    return gulp.src('pro/css/*.css')                 //设置css *代表合并并压缩css文件夹下所有css文件
        .pipe(concat('style.css'))                  //合并css文件到"style.css"
        .pipe(gulp.dest('list/css'))            //输出路径  [合并文件]
        .pipe(rename({suffix:'.min'}))              //修改文件名添加.min后缀
        .pipe(minifycss())                          //压缩文件
        .pipe(gulp.dest('list/css'))                //输出路径  [压缩文件]
        .pipe(notify({message:'css task ok'}));     //提示成功
});*/
gulp.task('cssmin', function () {
    gulp.src('www/teamPro1/css/*.css')
        .pipe(cssmin({
            advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: true,//类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        })).pipe(concat("all.css"))
        .pipe(gulp.dest('list/css'));
});



//js
 gulp.task('minifyjs',function(){
    return gulp.src("pro/js/libs/*.js")           //选择合并的JS文件
        .pipe(concat('index.js'))                 //合并js
        .pipe(gulp.dest('list/js'))           //输出路径  [合并文件]
       	.pipe(uglify())                           //压缩
        .pipe(gulp.dest('list/js'))           //输出路径  [压缩文件]
        .pipe(notify({message:"js task ok"}));   //提示
});
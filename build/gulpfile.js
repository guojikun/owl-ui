const gulp = require("gulp");
var sass = require("gulp-sass");
var cleanCss = require("gulp-clean-css");

const scss2css = function(path) {
    return gulp
        .src(path)
        .pipe(sass())
        .pipe(cleanCss())
        .pipe(gulp.dest("../lib/style/"));
};

gulp.task("sass", function() {
    return scss2css("../src/style/*.scss");
});

gulp.task("watch:sass", function() {
    const watcher = gulp.watch(["../src/style/*.scss"]);
    // 事件：'add', 'addDir', 'change', 'unlink', 'unlinkDir', 'ready', 'error', or 'all'全部事件
    watcher.on("all", function(event, path) {
        if (event === "add" || event === "change") {
            return scss2css(path);
        }
    });
});

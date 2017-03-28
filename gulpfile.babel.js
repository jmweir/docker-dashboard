import gulp                 from 'gulp';
import gutil                from 'gulp-util';
import webpack              from 'webpack';
import serve                from 'browser-sync';
import del                  from 'del';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import proxy                from 'http-proxy-middleware';

gulp.task('clean', (cb) => {
    del(['build']).then(function (paths) {
        gutil.log('[clean]', paths);
        cb();
    });
});

gulp.task('webpack', ['clean'], (cb) => {
    const config = require('./client/config/webpack.dist.config.js');

    webpack(config, (err, stats) => {
        if (err)  {
            throw new gutil.PluginError('webpack', err);
        }

        gutil.log('[webpack]', stats.toString({
            colors: true,
            chunks: false,
            errorDetails: true
        }));

        cb();
    });
});

gulp.task('serve', () => {
    const config = require('./client/config/webpack.dev.config.js');

    var compiler = webpack(config);

    serve({
        port: 9000,
        open: false,
        server: {
            baseDir: 'client'
        },
        middleware: [
            webpackDevMiddleware(compiler, {
                stats: {
                    colors: true,
                    chunks: false,
                    modules: false
                },
                publicPath: config.output.publicPath
            }),
            webpackHotMiddleware(compiler)
        ]
    });
});

gulp.task('watch', ['serve']);
gulp.task('default', ['watch']);
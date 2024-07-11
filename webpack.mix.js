// webpack.mix.js
let mix = require('laravel-mix');

mix.webpackConfig({
    stats: {
        children: true,
    },
    devtool: 'source-map'
});

if (!mix.inProduction()) {
    mix.sass('assets/sass/main.scss', 'assets/css/');
}
mix.options({
    processCssUrls: false
});

mix.sourceMaps();

if (mix.inProduction()) {
    mix.sass('assets/sass/main.scss', 'assets/css/main.min.css');
    // mix.styles('assets/css/main.css', 'assets/css/main.min.css');
}

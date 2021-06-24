const mix = require('laravel-mix');
const fs = require('fs');
const fs_extra = require('fs-extra');

mix.setPublicPath('./css');
mix.sass('./scss/vaahcss.scss', './css');


mix.webpackConfig({
    watchOptions: {

        aggregateTimeout: 2000,
        poll: 20,
        ignored: [
            '/node_modules/',
            '/css/',

        ]
    }
});
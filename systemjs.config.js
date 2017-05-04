/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
            '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
            // other libraries
            'app-module-path': 'npm:app-module-path',
            'rxjs':                      'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            'moment': 'npm:moment',
            'lodash': 'npm:lodash',
            'angular2-moment': 'npm:angular2-moment',
            'angular2-modal': 'npm:angular2-modal',
            'angular2-modal/plugins/vex': 'npm:angular2-modal/bundles',
            'ng2-charts': 'npm:ng2-charts'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            'app-module-path': {
                main: 'register.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            moment: {
                main: 'moment.js',
                defaultExtension: 'js'
            },
            lodash: {
                main: 'lodash.js',
                defaultExtension: 'js'
            },
            'angular2-moment': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            'angular2-modal': {
                main: 'bundles/angular2-modal.umd',
                defaultExtension: 'js'
            },
            'angular2-modal/plugins/vex': {
                main: 'angular2-modal.vex.umd',
                defaultExtension: 'js'
            },
            'ng2-charts': {
                main: 'bundles/ng2-charts.umd.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);
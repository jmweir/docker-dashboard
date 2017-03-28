
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'font-awesome-sass/assets/stylesheets/_font-awesome.scss';

import './style.scss';

import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';

import appModule from './components/app';
import containersModule from './components/containers';
import infoModule from './components/info';

angular.module('docker-dashboard', [
    uiBootstrap,

    appModule,
    containersModule,
    infoModule
]);

angular.element(document).ready(() => {
    angular.bootstrap(document, [ 'docker-dashboard' ]);
});
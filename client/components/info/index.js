import angular from 'angular';

import { InfoComponent } from './info.component';

export default angular
    .module('docker-dashboard.info', [])
    .component('info', InfoComponent)
    .name;

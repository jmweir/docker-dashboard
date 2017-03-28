import angular from 'angular';

import { ContainersComponent, ContainerComponent } from './containers.component';

export default angular
    .module('docker-dashboard.containers', [])
    .component('containers', ContainersComponent)
    .component('container', ContainerComponent)
    .name;
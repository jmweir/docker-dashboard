import angular from 'angular';

import { AppComponent } from './app.component';
import { DockerChannel } from './docker.channel';
import { Websocket } from './websocket';

export default angular
    .module('docker-dashboard.app', [])
    .component('app', AppComponent)
    .service('DockerChannel', DockerChannel)
    .service('Websocket', Websocket)
    .name;
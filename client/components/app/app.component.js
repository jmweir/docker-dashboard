import './app.scss';

class AppController {
    constructor($scope, DockerChannel) { 'ngInject';
        this.$scope = $scope;
        this.channel = DockerChannel;
        this.channel.subscribe();
        this.info = {}
        this.containers = [];
    }

    $onInit() {
        this.channel.info = this.onInfo.bind(this);
    }

    onInfo(data) {
        this.info = data.info;
        this.containers = data.containers;
        this.$scope.$apply();
    }
}

export const AppComponent = {
    template: require('./app.html'),
    controller: AppController
};
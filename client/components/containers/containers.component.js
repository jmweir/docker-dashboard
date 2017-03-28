import './containers.scss';

class ContainersController {
    start(id) {
        this.channel.start(id);
    }

    stop(id) {
        this.channel.stop(id);
    }

    rm(id) {
        this.channel.rm(id);
    }
}

class ContainerController {
    start() {
        this.containers.start(this.container.id);
    }

    stop() {
        this.containers.stop(this.container.id);
    }

    rm() {
        this.containers.rm(this.container.id);
    }
}

export const ContainersComponent = {
    template: require('./containers.html'),
    controller: ContainersController,
    bindings: {
        channel: '<',
        containers: '<',
        state: '<'
    }
};

export const ContainerComponent = {
    template: require('./container.html'),
    controller: ContainerController,
    bindings: {
        container: '<'
    },
    require: {
        containers: '^containers'
    },
};

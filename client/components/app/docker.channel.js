export class DockerChannel {
    constructor(Websocket) { 'ngInject';
        this.socket = Websocket;
    }

    subscribe() {
        this.subscription = this.socket.getConsumer().subscriptions.create(this.constructor.name, {
            received: data => {
                this.notify(data.message, data);
            }
        });
    }
    
    unsubscribe() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }    

    notify(callback) {
        let args = [].slice.call(arguments, 1);
        if (typeof this[callback] === "function") {
            this[callback].apply(this, args);
        }
    }

    start(id) {
        this.subscription.perform('start', {id: id});
    }

    stop(id) {
        this.subscription.perform('stop', {id: id});
    }

    rm(id) {
        this.subscription.perform('rm', {id: id});
    }
}
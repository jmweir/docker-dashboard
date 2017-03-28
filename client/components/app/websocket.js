import Cable from 'es6-actioncable';

export class Websocket {
  constructor() {
  }

  connect() {
    console.log('connecting websocket');
    this.consumer = Cable.createConsumer('ws://localhost:3000/cable');
  }

  getConsumer() {
    if (!this.consumer) {
      this.connect();
    }
    return this.consumer;
  }

  closeConnection() {
    if (this.consumer) {
      Cable.endConsumer(this.consumer);
    }
    delete this.consumer;
  }
}
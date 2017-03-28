
import './info.scss';

class InfoController {
    constructor() {
    }
}

export const InfoComponent = {
    template: require('./info.html'),
    controller: InfoController,
    bindings: {
        info: '<'
    }
};
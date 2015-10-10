angular.module('test', ['unicorn']).service('unicornHype', UnicornHype);
class UnicornHype {
    constructor(unicornHorn, $q) {
        'ngInject';    
        this.horn = unicornHorn;
        this.$q = $q;
    }
    findUnicorn() {
        return this.$q((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((pos) => {
                this.horn.thrust();
                resolve(`The unicorn is at ${pos.coords.latitude}`);
            }, reject);
        });
    }
}


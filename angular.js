import {UnicornHorn} from "../animals/unicorn";
class UnicornHype {
    constructor(unicornHorn:UnicornHorn) {
        this.horn = unicornHorn;
    }
    findUnicorn() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((pos) => {
                this.horn.thrust();
                resolve(`The unicorn is at ${pos.coords.latitude}`);
            }, reject);
        });
    }
}

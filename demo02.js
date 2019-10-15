class Storage {
    constructor() {
        this.localStorage = {
            setItem: function(key, value) {
                this[key] = value;
            },
            getItem: function(key) {
                return this[key]
            }
        };
    }
    static getInstance() {
        if(!Storage.instance) {
            return Storage.instance = new Storage();
        }
        return  Storage.instance;
    }

    setItem(key, value) {
        return this.localStorage.setItem(key, value);
    }
    getItem(key) {
        return this.localStorage.getItem(key);
    }
}

const storage1 = Storage.getInstance();
const storage2 = Storage.getInstance();

storage1.setItem('name', 'lily');
console.log('s1',storage1.getItem('name'))
console.log('s2',storage1.getItem('name'))
class SingleInstance {
    show() {
        console.log('single instance')
    }
    static getInstance() {
        if(!SingleInstance.instance) {
            SingleInstance.instance = new SingleInstance()
        }
        return SingleInstance.instance
    }
}

const s1 = SingleInstance.getInstance()
const s2 = SingleInstance.getInstance()

console.log(s1 === s2)
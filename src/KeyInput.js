class KeyInput {
    constructor(){
        this.keys = {};
        window.addEventListener("keydown",this.down.bind(this))
        window.addEventListener("keyup",this.up.bind(this))
    }

    isPressed(keyCode){
        return this.keys[keyCode] ? this.keys[keyCode] : false
    }

    down(){
        if (this.keys[event.keyCode]) return;
        this.keys[event.keyCode] = true
        console.log("KeyDown", event.key, event.keyCode)
    }

    up(){
        this.keys[event.keyCode] = false
        console.log("KeyUp", event.key, event.keyCode)
    }
}

const keyInput = new KeyInput();

export default keyInput
import commandHandler from "./commandhandler"

const keyboardHandler = (event:KeyboardEvent):void=>{
    if(event.ctrlKey && event.key == " "){
        commandHandler.makeActive();
        return;
    }
    if(commandHandler._isActive){
        commandHandler.handleKeyEvent(event)
        commandHandler.render()
    }
}

document.addEventListener("keydown", keyboardHandler)
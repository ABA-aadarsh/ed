import { commandBuffer as buffer } from "./bufferHandler/commandBuffer"

import { isAlphanumeric } from "../utils/utils"

class CommandHandler {
    private commandBuffer  = buffer
    private isActive: boolean
    private commandBox: HTMLDivElement
    constructor(id:string){
        this.isActive = false
        this.commandBox = document.querySelector("div#"+id)
    }
    
    public get _isActive() : boolean {
        return this.isActive
    }
    public removeActive(){
        this.isActive = false
    }
    public handleKeyEvent(event: KeyboardEvent){
        if(event.key=="Escape"){
            this.removeActive()
        }else if(event.key=="Backspace"){
            this.commandBuffer.deleteChar()
        }
        else if(event.key == "Enter"){
            this.executeCommand()
        }
        else{
            if(isAlphanumeric(event.key) || event.key==" "){
                this.commandBuffer.insertChar(event.key[0])
            }
        }
    }
    public makeActive(){
        this.isActive = true
    }
    public render(){
        this.commandBox.innerHTML = this.commandBuffer._buffer
    }
    private executeCommand(){
        if(this.commandBuffer._buffer == "kill"){
            window.windowAction.close()
        }
    }
}


const commandHandler = new CommandHandler("commandInputBox")
export default commandHandler
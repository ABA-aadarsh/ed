// buffer system for handling the command box

class CommandBuffer {
    private command: string = ""
    private cursorPosition: number = 0
    constructor(){
    }
    public insertChar(ch: string):void{
        this.command = this.command.slice(0, this.cursorPosition) + ch + this.command.slice(this.cursorPosition)
        this.cursorPosition += 1
    }
    public deleteChar(position: number = -1){
        if(position == -1){
            // remove char behnid cursor -> backspace event
            this.command = this.command.slice(0, this.cursorPosition - 1) + this.command.slice(this.cursorPosition + 1)
            this.cursorPosition = Math.max(0, this.cursorPosition-1)
        }
    }
    public get _buffer() : string {
        return this.command
    }
    public get _cursorPosition() : number {
        return this.cursorPosition
    }
    
}
export const commandBuffer = new CommandBuffer()
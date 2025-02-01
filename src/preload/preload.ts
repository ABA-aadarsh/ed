import { contextBridge, ipcRenderer } from "electron/renderer";

contextBridge.exposeInMainWorld(
    "windowAction", {
        close: ()=>ipcRenderer.send("closeWindow"),
        minimize: ()=>ipcRenderer.send("minimizeWindow"),
        toggleMaximize: ()=>ipcRenderer.send("toggleMaximizeWindow")
    }
)
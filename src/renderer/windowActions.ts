const closeWindowButton = document.getElementById("closeWindow")
const minimizeWindowButton = document.getElementById("minimizeWindow")
const toggleMaximizeWindowButton = document.getElementById("toggleMaximizeWindow")

closeWindowButton.addEventListener("click", ()=>window.windowAction.close())
minimizeWindowButton.addEventListener("click", ()=>window.windowAction.minimize())
toggleMaximizeWindowButton.addEventListener("click", ()=>window.windowAction.toggleMaximize())
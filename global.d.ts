export {};

declare global {
    interface Window {
        windowAction: {
            close: ()=>void;
            minimize: ()=>void;
            toggleMaximize: ()=>void;
        }
    }
}

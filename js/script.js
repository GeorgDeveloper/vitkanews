import {App} from "./App.js";


const {createRoot} = ReactDOM; // Получаем createRoot из глобальной области видимости ReactDOM
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <App/>
);

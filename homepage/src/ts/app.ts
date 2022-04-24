import {Homepage} from "./app/homepage";
require('../css/main.css');

let homepage: Homepage;

window.onload = () => {
    homepage  = new Homepage();
    homepage.init();
    homepage.resize();
};

window.onresize = function() {
    homepage.resize();
};

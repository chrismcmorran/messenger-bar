let menubar = require('menubar');
let menu = menubar();
menu.on('ready', ()=> {
    console.log('messenger-bar has been loaded into the native menu bar.');
});

requirejs.config({
    paths: {
        "text": "../libs/text",
        "jquery": "../libs/jquery",
        "knockout": "../libs/knockout",
        "durandal": "../bower_components/durandal/js",
        "plugins": "../bower_components/durandal/js/plugins",
        "transitions": "../bower_components/durandal/js/transitions"
    }
});

define(function(require) {
    var system = require("durandal/system"),
        app    = require("durandal/app");

    // system.debug(true);

    app.title = "Durandal";

    app.configurePlugins({
        router: true,
        dialog: true
    });

    app.start().then(function() {
        app.setRoot("shell");
    });
})
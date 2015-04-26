define(function(require) {
    var router = require("plugins/router");

    return {
        router: router,
        activate: function() {
            router.map([
                {
                    route: "",
                    title: "Home",
                    moduleId: "home",
                    nav: true
                },
                {
                    route: "repos",
                    title: "Repos",
                    moduleId: "repos",
                    nav: true
                }
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});
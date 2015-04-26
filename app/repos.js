define(function(require) {
    var app  = require("durandal/app"),
        http = require("plugins/http"),
        ko   = require("knockout");

    var url = "https://api.github.com/users/kieranajp/repos"
    var qs  = {};

    return {
        repos: ko.observableArray([]),

        activate: function() {
            var me = this;

            if (this.repos().length > 0) {
                return;
            }

            return http.get(url, qs).then(function(res) {
                me.repos(res);
            });
        }
    }
});
"use strict";
const route_1 = require('./route');
class IndexRoute extends route_1.BaseRoute {
    constructor() {
        super();
    }
    static create(router) {
        console.log("[IndexRoute::create] Creating the index route.");
        router.get("/", (req, res, next) => {
            new IndexRoute().index(req, res, next);
        });
    }
    index(req, res, next) {
        this.title = 'Philip home page...';
        let options = {
            "message": "Welcone to my first Typescript node express page....."
        };
        this.render(req, res, "index", options);
    }
}
exports.IndexRoute = IndexRoute;
//# sourceMappingURL=index.js.map
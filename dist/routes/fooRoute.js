"use strict";
const route_1 = require('./route');
class FooRoute extends route_1.BaseRoute {
    constructor() {
        super();
    }
    static create(router) {
        console.log('[FooRoute::create] creating FooRoute');
        router.get('/foo', (req, res, next) => {
            new FooRoute().index(req, res, next);
        });
        router.post('/foo', (req, res, next) => {
            res.send('hello from   post.');
        });
    }
    index(req, res, next) {
        this.title = 'this is the foo page.';
        let options = {
            'message': 'hello from the foo page'
        };
        this.render(req, res, 'index', options);
    }
}
exports.FooRoute = FooRoute;
//# sourceMappingURL=fooRoute.js.map
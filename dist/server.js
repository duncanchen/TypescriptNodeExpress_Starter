"use strict";
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const errorHandler = require('errorhandler');
const methodOverride = require('method-override');
const index_1 = require("./routes/index");
const fooRoute_1 = require('./routes/fooRoute');
class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.api();
    }
    static bootstrap() {
        return new Server();
    }
    api() {
    }
    config() {
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "pug");
        this.app.use(logger("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(cookieParser('MY_SECRET_HERE'));
        this.app.use(methodOverride());
        this.app.use(function (err, req, res, next) {
            err.staus = 404;
            next(err);
        });
        this.app.use(errorHandler());
    }
    routes() {
        let router;
        router = express.Router();
        index_1.IndexRoute.create(router);
        fooRoute_1.FooRoute.create(router);
        this.app.use(router);
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map
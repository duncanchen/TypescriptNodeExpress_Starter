import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import errorHandler = require('errorhandler');
import methodOverride = require('method-override');
import { IndexRoute } from "./routes/index";
import { FooRoute } from './routes/fooRoute';

/* 
* the server.
*
* 
* @class server
*/

export class Server {
    public app: express.Application;

    /**
     * Bootstrap the Application
     * 
     * @class Server
     * @method Bootstrap
     * @static
     * @return {ng.auto InjectorService} Return the newly created injector for this app.
     */

    public static bootstrap(): Server {
        return new Server();
    }

    /**
     * Constructor.
     * 
     * @class Server
     * @constructor
     */
    constructor() {
        this.app = express();

        this.config();

        this.routes();

        this.api();
    }

    /**
     * Create the REST api
     * 
     * @class Server
     * @method api
     */
    public api() {
        // leave empty for now.
    }



    /**
     * Configure Application
     * 
     * @class Server
     * @method config
     */
    public config() {
        this.app.use(express.static(path.join(__dirname, "public")));

        //config pug
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "pug");

        //use logger middleware
        this.app.use(logger("dev"));

        this.app.use(bodyParser.json());

        this.app.use(bodyParser.urlencoded({
            extended: true
        }));

        this.app.use(cookieParser('MY_SECRET_HERE'));

        this.app.use(methodOverride());

        this.app.use(function (err: any, req: express.Request, res: express.Response,
            next: express.NextFunction) {
            err.staus = 404;
            next(err);
        });

        this.app.use(errorHandler());
    }

    /**
 * Create router
 * 
 * @class Server
 * @method routes
 * @return void
 */
    public routes() {
        let router: express.Router;
        router = express.Router();

        // routes go here
        //IndexRoute
        IndexRoute.create(router);
        //create the fooRoute
        FooRoute.create(router);


        //use the router middleware
        this.app.use(router);
    }
}
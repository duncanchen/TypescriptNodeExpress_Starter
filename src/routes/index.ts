import { NextFunction, Request, Response, Router } from 'express';
import { BaseRoute } from './route';

/**
 * / route
 * 
 * @class User
 */

export class IndexRoute extends BaseRoute{

    /**
     * Create  the routes.
     * 
     * @class IndexRoute
     * @method create
     * @static
     */
    public static create(router: Router){
        console.log("[IndexRoute::create] Creating the index route.");

        router.get("/",(req: Request, res:Response, next:NextFunction)=>{
            new IndexRoute().index(req,res,next);
        });

    }

    /**
     * Constructor
     * 
     * @class IndexRoute
     * @constructor
     */
    constructor(){
        super();
    }

    /**
     * the Home page route.
     * 
     * @class IndexRoute
     * @method index
     * @param req {Request} the express Request object.
     * @param res {Response} the express Response Object.
     * @param next {NextFunction} execute the next method.
     */
    public index(req: Request, res: Response, next: NextFunction){
        this.title ='Philip home page...';

        let options: Object ={
            "message": "Welcone to my first Typescript node express page....."
        };

        this.render(req,res,"index",options)
    }

}
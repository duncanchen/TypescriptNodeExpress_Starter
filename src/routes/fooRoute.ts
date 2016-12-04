import { NextFunction, Request, Response, Router } from 'express';
import { BaseRoute } from './route';

export class FooRoute extends BaseRoute {

    public static create(router: Router) {
        console.log('[FooRoute::create] creating FooRoute');

        router.get('/foo', (req: Request, res: Response, next: NextFunction) => {
            new FooRoute().index(req, res, next);
        });

        router.post('/foo',(req: Request, res: Response, next: NextFunction)=>{
              res.send('hello from   post.');
        })
    }

    constructor() {
        super();
    }

    public index(req: Request, res: Response, next: NextFunction){
        this.title='this is the foo page.';

        let options: Object={
            'message': 'hello from the foo page'
        };
        this.render(req,res,'index',options)
    }
}

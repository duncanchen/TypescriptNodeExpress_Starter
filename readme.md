# Typescript - node - express starter.

This is from http://brianflove.com/2016/11/08/typescript-2-express-node/ except that grunt is not being used, instead 
the pug templates are in the dist/views folder.

Typscript need to be installed 

To add a new route remember to add it to the server.ts file as well 

~~~~ 
// routes go here

// create the IndexRoute
IndexRoute.create(router);

//create the fooRoute
FooRoute.create(router);

~~~~

commands:

Starts the typescript compiler in watch mode
~~~~
 tsc -w 
~~~~

start nodemon to restart node after file changes
~~~~
 npm run dev
~~~~
## npm run dev // 

import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';

@Middleware()
export class LoggerMiddleware implements NestMiddleware {
  async resolve(name: string): Promise<ExpressMiddleware> {
    // await someAsyncFn();

    return async (req, res, next) => {
      // await someAsyncFn();
          
    if (req.method == "OPTIONS") {
      res.status = 200
    }
    res.header("Access-Control-Allow-Origin", req.header.origin)
    res.header("Access-Control-Allow-Credentials", true)
    res.header("Access-Control-Max-Age", 86400000)
    res.header("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE")
    res.header("Access-Control-Allow-Headers", "application/x-www-form-urlencoded, x-www-form-urlencoded, x-requested-with, accept, origin, content-type, Authorization");

      // tslint:disable-next-line:no-console
      console.log(`[${name}] Request...`); // [ApplicationModule] Request...
      next();
    };
 }
}
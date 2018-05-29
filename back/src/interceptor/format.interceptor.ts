import { Injectable, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

export interface Response<T> {
    result: T;
    status: number;
    msg: string;
    time: any;
    used: string;
}
@Injectable()
export class FormatInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    call$: Observable<T>,
  ): Observable<any> {
    const now = Date.now();
    return call$.pipe(
        map((data: any) => {
            if (data.error) {
                return {
                    status: 1,
                    result: null,
                    msg: data.msg,
                    time: new Date().toDateString(),
                    used: `${Date.now() - now}ms`
                };
            }
            return {
                result: data,
                status: 0,
                msg: 'success',
                time: new Date().toDateString(),
                used: `${Date.now() - now}ms`
            };
        })
    );
  }
}

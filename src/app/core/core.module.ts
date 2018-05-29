import { NgModule, Optional, SkipSelf } from '@angular/core';
import { GetBlogInfoService } from './services/get-blog-info.service';


@NgModule({
    providers: [
        GetBlogInfoService
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}

export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}

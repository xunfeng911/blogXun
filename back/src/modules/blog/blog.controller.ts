
import { Controller, Get, Post, Delete, Req, Body, Param } from '@nestjs/common';
import { blogFunc } from '../../orm/blog';
import { MarkedService } from '../../services/marked/marked.service';

@Controller('blog')
export class BlogsController {
    constructor(private readonly markedService: MarkedService) { }
    @Post('')
    async root() {
        return await blogFunc.list(1, 5);
    }

    @Get('/:id')
    async getBLogById(@Param() params) {
        return await blogFunc.getOne(params.id);
    }
    /**
     * @description 新增一条
     *
     * @param {any} req
     * @returns
     * @memberof BlogsController
     */
    @Post('/new')
    async newBlog(@Req() req, @Body() data: any) {
        // tslint:disable-next-line:curly
        if (!req.files[0]) {
            return {
                error: true,
                msg: '缺少上传的文件'
            };
        }
        const result: any = await this.markedService.markdownFormatting(req.files[0].path);
        return await blogFunc.newBlog(result);
        // res.status(HttpStatus.CREATED).send({data: b});
    }

    @Get('/list/:page')
    async getBlogListByPage(@Param() params) {
        return await blogFunc.list(params.page, params.size || 5);
    }

    @Post('/update/:id')
    async updateBlog(@Param() params, @Body() data: any) {
        return await blogFunc.update(data.info, params.id);
    }

    @Delete('delete/:id')
    async deleteBlog(@Param() params) {
        return await blogFunc.delete(params.id);
    }
}

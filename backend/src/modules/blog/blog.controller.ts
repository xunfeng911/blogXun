
import { Controller, Get, Post, Put, Delete, Req, Res, Request, Response, Body, Param, HttpStatus } from '@nestjs/common';
import { blogFunc } from '../../orm/blog';
import { MarkedService } from '../../services/marked/marked.service';

@Controller('blog')
export class BlogsController {
  constructor(private readonly markedService: MarkedService) {}
  @Get('')
  async root() {
    return await blogFunc.list(1);
  }

  @Get('/:id')
  async getBLogById(@Param() params) {
    return await blogFunc.getOne(params.id);
  }

  @Post('/new')
  async newBlog(@Response() res, @Request() req) {
    const result = await this.markedService.markdownFormatting(req.files[0].path);
    const b = await blogFunc.newBlog(result);
    res.status(HttpStatus.CREATED).send(b);
  }

  @Get('/list/:page')
  async getBlogListByPage(@Param() params) {
    return await blogFunc.list(params.page);
  }

  @Post('/update')
  async updateBlog(@Response() res, @Request() req) {
    console.log(req);
    res.status(HttpStatus.CREATED).send(req);
  }
}
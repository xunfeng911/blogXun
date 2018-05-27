
import { Controller, Get, Post, Put, Delete, Request, Res, Response, Body, Param, HttpStatus } from '@nestjs/common';
import { blogFunc } from '../../orm/blog';

@Controller('auth')
export class AuthController {
  @Get('/authorized')
  async root() {
    return 1;
  }
  @Get('/')
  async test() {
    return 1;
  }

  // @Post('/update')
  // async updateBlog(@Body() ){}
}

import { Injectable } from '@nestjs/common';
import * as marked from 'marked';
import * as fs from 'fs';
import * as fm from 'front-matter';

// Set options
// `highlight` example uses `highlight.js`
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code) {
      return require('highlight.js').highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

@Injectable()
// tslint:disable-next-line:component-class-suffix
export class MarkedService {
  async markdownFormatting(path) {
    const result = {
      attributes: {},
      body: '',
      intro: ''
    };
    // 读取文件
    const text = await fs.readFileSync(path, 'utf8');
    const content = fm(text);
    result.attributes = content.attributes;
    const info = content.body.split('<!--more-->');

    if (info.length === 1) {
      result.body = await marked(info[0]);
    } else {
      result.body = await marked(info[1]);
      result.intro = info[0];
    }
    return result;
  }
}

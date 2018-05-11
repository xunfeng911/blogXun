import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, getRepository, ManyToMany, JoinTable, getConnection } from 'typeorm';
import { async } from '@angular/core/testing';
import { Tag, tagFunc } from './tag';


@Entity()
export class Blog extends BaseEntity {
  @PrimaryGeneratedColumn()
  blogId: number;

  @Column()  
  blogTitle: string;

  @Column('time')
  blogDate;

  @Column()
  blogViews: number;

  @Column()
  blogIntro: string;

  @Column({type: 'longtext'})
  blogCont: string;

  @ManyToMany(type => Tag)
  @JoinTable()
  tags: Tag[];
}

interface BlogData {
  attributes: {
    title: string;
    tags?: Array<string>;
  };
  body: string;
  intro?: string;
}
class BlogFunc {
  /**
   * @description 创建新的文章
   */
  async newBlog(data: BlogData) {
    let list = [];

    if (data.attributes.tags) {
      await data.attributes.tags.map(async itm => {
        const isTag = await tagFunc.getOne(itm)
        if (isTag) {
          await getConnection().manager.save(isTag);
          list.push(isTag);
        } else {
          const _tag = new Tag();
          _tag.name = itm;
          await getConnection().manager.save(_tag);
          list.push(_tag);  
        }
      })
    }

    const _blog = new Blog();
    _blog.blogDate = new Date();
    _blog.blogIntro = data.intro || 'missing intro';
    _blog.blogTitle = data.attributes.title || 'missing ttile';
    _blog.blogViews = 0;
    _blog.blogCont = data.body;
    _blog.tags = [...list];
    await getConnection().manager.save(_blog);

    return _blog;
  }

  async list(page: number = 1) {
    const data = await getRepository(Blog)
      .createQueryBuilder('blog')
      .orderBy('blogId')
      .leftJoinAndSelect("blog.tags", "tag")
      .offset((page - 1) * 5)
      .limit(5)
      .getMany();
    return data;
  }

  async update(info: object, id: number) {
    await getRepository(Blog)
      .createQueryBuilder('blog')
      .update()
      .set({ ...info })
      .where('blogId = "blogId', { blogId: id })
      .execute();
  }

  async delete(id: number) { }

  async getOne(id: number) {
    const data = await getRepository(Blog)
      .createQueryBuilder('blog')
      .leftJoinAndSelect("blog.tags", "tag")
      .where('blogId = :blogId', { blogId: id })
      .getOne();
    return data;
  }

}

export const blogFunc = new BlogFunc();

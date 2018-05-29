import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, getRepository, ManyToMany, JoinTable, getConnection } from 'typeorm';
import { Tag, tagFunc } from './tag';


@Entity()
export class Blog extends BaseEntity {
    @PrimaryGeneratedColumn()
    blogId: number;

    @Column()
    blogTitle: string;

    @Column('date')
    blogDate;

    @Column()
    blogViews: number;

    @Column()
    blogIntro: string;

    @Column({ type: 'longtext' })
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
        const list = [];

        if (data.attributes.tags) {
            for (const itm of data.attributes.tags) {
                const isTag = await tagFunc.getOne(itm);
                if (isTag) {
                    await getConnection().manager.save(isTag);
                    list.push(isTag);
                } else {
                    const _tag = new Tag();
                    _tag.name = itm;
                    await getConnection().manager.save(_tag);
                    list.push(_tag);
                }
            }
        }

        const _blog           = new Blog();
              _blog.blogDate  = new Date().toLocaleDateString();
              _blog.blogIntro = data.intro || 'missing intro';
              _blog.blogTitle = data.attributes.title || 'missing ttile';
              _blog.blogViews = 0;
              _blog.blogCont  = data.body;
              _blog.tags      = [...list];
        await getConnection().manager.save(_blog);

        return {data: _blog};
    }

    async list(page: number = 1, size: number = 5) {
        const pageSet = await this.getPageSet(size);
        let data = await getRepository(Blog)
            .createQueryBuilder('blog')
            .orderBy('blogId')
            .leftJoinAndSelect('blog.tags', 'tag')
            .offset((page - 1) * size)
            .limit(size)
            .getMany();
        data = data.map(itm => {
            delete itm.blogCont;
            return itm;
        });
        return {data, pageSet};
    }

    async update(info: object, id: number) {
        await getRepository(Blog)
            .createQueryBuilder('blog')
            .update()
            .set({ ...info })
            .where('blogId = "blogId', { blogId: id })
            .execute();
    }

    async getPageSet(size: number = 5) {
        const pageSet = {
            total    : await Blog.count(),
            pageSize : size,
            pageIndex: 0
        };
        pageSet.pageIndex = pageSet.total / pageSet.pageSize;
        return pageSet;
    }
    async delete(id: number) {
        await getConnection()
        .createQueryBuilder()
        .delete()
        .from(Blog)
        .where('blogId = :blogId', { blogId: id })
        .execute();
    }

    async getOne(id: number) {
        const data = await getRepository(Blog)
            .createQueryBuilder('blog')
            .leftJoinAndSelect('blog.tags', 'tag')
            .where('blogId = :blogId', { blogId: id })
            .getOne();
        return {data};
    }

}

export const blogFunc = new BlogFunc();

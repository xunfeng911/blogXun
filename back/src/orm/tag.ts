import { Entity, PrimaryGeneratedColumn, Column, getRepository } from 'typeorm';

@Entity()
export class Tag  {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}


class TagFunc {
  async getOne(name: string) {
    const data = await getRepository(Tag)
      .createQueryBuilder('tag')
      .where('name = :name', { name: name })
      .getOne();
    return data;
  }
}

export const tagFunc = new TagFunc();

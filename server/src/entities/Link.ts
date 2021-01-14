import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class Link extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!:number;

  @Field(()=> String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(()=> String)
  @CreateDateColumn()
  updatedAt: Date;

  @Field()
  @Column()
  url: string;

  @Field()
  @Column()
  description!: string;
}
import { Column, Entity, Unique } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @Unique(['username'])
  @Column()
  username: string;

  @Unique(['email'])
  @Column()
  email: string;

  @Unique(['phone'])
  @Column()
  phone: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  // @Column()
  // yearOfBirth: number;
}

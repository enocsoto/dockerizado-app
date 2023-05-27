import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('username', ['username'], { unique: true })
@Entity('usuario', { schema: 'prueba_db' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { name: 'name', length: 50 })
  name: string;

  @Column('varchar', { name: 'lastname', length: 255 })
  lastname: string;

  @Column('varchar', { name: 'username', unique: true, length: 50 })
  username: string;

  @Column('varchar', { name: 'email', unique: true, length: 50 })
  email: string;

  @Column('timestamp', {
    name: 'createdat',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdat: Date;

  @Column('timestamp', {
    name: 'updatedat',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedat: Date;
}

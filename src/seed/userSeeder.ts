import { UserEntity } from '../user/entities/user.entity';
import { DataSource } from 'typeorm';
import {
  Seeder,
  SeederFactoryManager,
  setSeederFactory,
} from 'typeorm-extension';
import { faker } from '@faker-js/faker';

export class UserSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const userRepository = dataSource.getRepository(UserEntity);
    const setSeederFactory = {
      id: faker.datatype.uuid(),
      name: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      createdat: faker.date.recent(),
    };
    const newUser = userRepository.create(setSeederFactory);
    await userRepository.save(newUser);
  }
}

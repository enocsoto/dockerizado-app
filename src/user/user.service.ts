import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UserService {
constructor(
  @InjectRepository(UserEntity)
  private readonly userRepository: Repository<UserEntity>
) {}

  async create(createUserDto: CreateUserDto) {
    try {
      createUserDto.name = createUserDto.name.toLocaleLowerCase();
    createUserDto.name = createUserDto.last_name.toLocaleLowerCase();

    const user = await this.userRepository.create(createUserDto);
    return user;
    } catch (error) {
        throw new Error( `No se creo el usuario` +  error);
    }
  }

  findAll(): Promise<UserEntity[]> {
    
    return this.userRepository.find()
  }

  async findOne(id: string) {
      return this.userRepository.findOneBy({id})
  }

 async  update(id: string, updateUserDto: UpdateUserDto) {
    
   const user = await this.findOne(id);
   if(!user) throw new Error(`No se encontro el usuario con id ${id}`)
   updateUserDto.name =updateUserDto.name.toLocaleLowerCase();
    
      
    return user;
  }

  async remove(id: string) {

    return this.userRepository.delete(id);
  }
}

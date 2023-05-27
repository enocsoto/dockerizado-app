import { DataSource, DataSourceOptions } from "typeorm";
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SeederOptions } from "typeorm-extension";
import { MainSeeder } from "src/seed/mainSeeder";

ConfigModule.forRoot({});

const configService = new ConfigService();

export const dataSourceOptions: DataSourceOptions &  SeederOptions = {
  
  type: 'mysql',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
  synchronize: false,
  seeds: [MainSeeder]
}


export const dataSource = new DataSource(dataSourceOptions);

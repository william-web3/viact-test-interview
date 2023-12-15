import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'mysql',
          host: configService.get('MYSQL_HOST', 'localhost'),
          port: Number(configService.get('MYSQL_PORT', 3306)),
          username: configService.get('MYSQL_USER', 'viact'),
          password: configService.get('MYSQL_PASSWORD', 'viact'),
          database: configService.get('MYSQL_DATABASE', 'viact'),
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [],
  exports: [],
})
export class DatabaseModule {}

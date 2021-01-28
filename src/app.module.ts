import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: process.env.DB_SYNCHRONIZE === 'true',
      logging: process.env.LOGGING === 'true',
      entities: [
        'src/**/*.entity.ts'
      ],
      migrations: [
        'src/**/*.migration.ts'
      ],
      subscribers: [
        'src/**/*.subscriber.ts'
      ],
      cli: {
        entitiesDir: 'src/tmp/entity/',
        migrationsDir: 'src/tmp/migration/',
        subscribersDir: 'src/tmp/subscriber/'
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
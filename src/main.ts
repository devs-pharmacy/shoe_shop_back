import '../env/setup.env'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule)

  const port = +process.env.APP_PORT
  await app.listen(process.env.APP_PORT)
  
  console.log(`I am listening at port: ${port}.`)
}
bootstrap()
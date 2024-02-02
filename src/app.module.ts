import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from '@Configuration/configuration';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from './orders/orders.module';
import { StatesModule } from './states/states.module';
import { SeedsModule } from './seeds/seeds.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const uri = configService.get<string>('uri');
        return { uri };
      },
      inject: [ConfigService],
    }),
    OrdersModule,
    StatesModule,
    SeedsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

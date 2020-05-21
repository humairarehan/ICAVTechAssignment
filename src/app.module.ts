import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentModule } from './appointment/appointment.module';
import { PricingModule } from './pricing/pricing.module';
import { CouponModule } from './coupon/coupon.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://dbUser:IpNpRMQahx4n2tBh@cluster0-6pdzf.mongodb.net/test?retryWrites=true&w=majority'), AppointmentModule, PricingModule, CouponModule, PaymentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

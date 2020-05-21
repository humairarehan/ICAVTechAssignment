import { Injectable, NotFoundException } from '@nestjs/common';
import { RegisterCouponDto } from './dto/registerCoupon.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Coupon } from './schemas/coupon.schema';
import { Model } from 'mongoose';
import { CouponPrize } from './couponprice.model';
import { Pricing } from '../pricing/price.model';

@Injectable()
export class CouponService {


    constructor(@InjectModel(Coupon.name) private readonly couponModel: Model<Coupon>) { }

    async registerCoupon(registerCouponDto: RegisterCouponDto): Promise<Coupon> {
        const createdAppointment = new this.couponModel(registerCouponDto);
        return createdAppointment.save();
    }

    async applyCoupon(couponPrize: CouponPrize): Promise<Pricing> {
        let coupon;
        const totalPriceAfterCouponApplied = new Pricing();
        try {
            coupon = await this.couponModel.findOne({ 'coupon_code': couponPrize.coupon_code }).exec();
            console.log("coupon data",coupon,couponPrize);
            
        } catch (error) {
            throw new NotFoundException('Coupon Code Invalid.');
        }
        if (!coupon) {
            throw new NotFoundException('Coupon Code Not Found.');
        }

        totalPriceAfterCouponApplied.price = Number(couponPrize.total_value) - (Number(couponPrize.total_value) * ((100 - Number(coupon.discount)) / 100));
        totalPriceAfterCouponApplied.price = parseFloat(totalPriceAfterCouponApplied.price.toFixed(2));
        console.log("totalPriceAfterCouponApplied",totalPriceAfterCouponApplied);
        
        return totalPriceAfterCouponApplied;
    }

}

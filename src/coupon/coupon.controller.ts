/* eslint-disable @typescript-eslint/camelcase */
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { RegisterCouponDto } from './dto/registerCoupon.dto';
import { CouponService } from './coupon.service';
import { CouponPrize } from './couponprice.model';
import { Pricing } from '../pricing/price.model';

@Controller('coupon')
export class CouponController {
    constructor(private readonly couponService: CouponService) { }

    @Post('/registerCoupon')
    async registerCoupon(@Body() registerCouponDto: RegisterCouponDto) {
        await this.couponService.registerCoupon(registerCouponDto);
    }

    @Get('/applyCoupon/:couponcode/:totalPrice')
    async applyCoupon(@Param('couponcode') couponcode: string, @Param('totalPrice') totalPrice: number): Promise<Pricing> {
        // coupon_code: string;
        // total_value: number;
        const applyObj = new CouponPrize();
        applyObj.coupon_code = couponcode;
        applyObj.total_value = totalPrice;
        return  this.couponService.applyCoupon(applyObj);
    }
}

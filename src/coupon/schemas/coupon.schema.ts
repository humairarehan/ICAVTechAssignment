import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Coupon extends Document {
    @Prop()
    coupon_code: string;

    @Prop()
    discount: number;

    @Prop()
    is_active: boolean;

}

export const CouponSchema = SchemaFactory.createForClass(Coupon);
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Appointment extends Document {
    @Prop()
    appointment_name: string;

    @Prop()
    user_id: number;

    @Prop()
    start_date_time: Date;

    @Prop()
    end_date_time: Date;

    @Prop()
    mow_size: number;
  

}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
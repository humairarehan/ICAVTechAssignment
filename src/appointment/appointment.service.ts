import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Appointment } from './schemas/appointment.schema';
import { CreateAppointmentDto } from './dto/createAppointment.dto';

@Injectable()
export class AppointmentService {


    constructor(@InjectModel(Appointment.name) private readonly appointmentModel: Model<Appointment>) { }

    async bookAppointment(createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
        const createdAppointment = new this.appointmentModel(createAppointmentDto);
        return createdAppointment.save();
    }

    async getAllAppointments(): Promise<Appointment[]> {
        return this.appointmentModel.find().exec();
    }

    async getAppointmentsByUserID(userID: string): Promise<Appointment[]> {
        let appointments;
        try {
            appointments = await this.appointmentModel.findById(userID).exec();
        } catch (error) {
            throw new NotFoundException('Could not find Appointment.');
        }
        if (!appointments) {
            throw new NotFoundException('Could not find Appointment.');
        }
        return appointments;
    }
}

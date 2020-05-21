import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/createAppointment.dto';
import { Appointment } from './schemas/appointment.schema';

@Controller('appointment')
export class AppointmentController {

    constructor(private readonly appointmentService: AppointmentService) { }

    @Post()
    async bookAppointment(@Body() createAppointmentDto: CreateAppointmentDto) {
        await this.appointmentService.bookAppointment(createAppointmentDto);
    }

    @Get()
    async getAllAppointments(): Promise<Appointment[]> {
        return this.appointmentService.getAllAppointments();
    }
    @Get(':id')
    async getAppointmentsByUserID(@Param('id') userID: string): Promise<Appointment[]> {
        return this.appointmentService.getAppointmentsByUserID(userID);
    }
}

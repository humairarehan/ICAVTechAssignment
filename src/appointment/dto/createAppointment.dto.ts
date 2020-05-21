export class CreateAppointmentDto {
    readonly appointment_name: string; //description
    readonly user_id: number;
    readonly start_date_time: Date;
    readonly end_date_time: Date;
    readonly mow_size: number;
}
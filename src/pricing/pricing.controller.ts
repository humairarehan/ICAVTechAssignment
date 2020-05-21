import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Pricing } from './price.model';
import { PricingService } from './pricing.service';

@Controller('pricing')
export class PricingController {
    constructor(private readonly pricingService: PricingService) { }
    @Get(':id')
    async getPriceBySize(@Param('id') size: string): Promise<Pricing> {
        return this.pricingService.getPriceBySize(parseInt(size));
    }

    // @Post()
    // async getPriceBySizeAndPercentageDiscount(@Body() sizeDiscount: SizeDiscount): Promise<Pricing> {

    //     return this.pricingService.getPriceBySizeAndPercentageDiscount(sizeDiscount);
    // }
}

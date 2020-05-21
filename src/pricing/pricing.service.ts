import { Injectable, NotFoundException } from '@nestjs/common';
import { Pricing } from './price.model';

@Injectable()
export class PricingService {
    
    async getPriceBySize(size: Number): Promise<Pricing> {
        const priceBySize = new Pricing();
        if (size <= 0) {
            throw new NotFoundException('Invalid Size.');
        }
        if (size <= 15) {
            priceBySize.price = Number(size);

        } else if (size <= 25) {
            priceBySize.price = Number(size) * 0.9;
        }
        else if (size > 25) {
            priceBySize.price = Number(size) * 0.85;
        }
        priceBySize.price = parseFloat(priceBySize.price.toFixed(2));
        return priceBySize
    }

}

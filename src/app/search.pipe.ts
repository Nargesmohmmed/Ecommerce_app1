import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './shared/interface/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(product:Product[] , trem:string): Product[] {
    return product.filter( (product)=>
    product.title.toLowerCase().includes(trem.toLowerCase()));
  }

}

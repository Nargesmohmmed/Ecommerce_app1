import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartDetails:any = {};
  numberOfItems:number = 0;

  constructor(private _CartService: CartService) {}

  ngOnInit(): void {

    this._CartService.getUserCart().subscribe({

      next: (response) => {

        this.cartDetails = response.data;
        this.numberOfItems = response.numOfCartItems;
        console.log(response.data);

      },
      error: (err) => {
        console.log(err);
      }

    })

}

// removeCartItem

  removeCartItem(id:string):void {

    this._CartService.removeItem(id).subscribe({

      next: (response) => {

        console.log(response.data);
        this.cartDetails = response.data;
        this._CartService.cartNumber.next(response.numOfCartItems);

      },
      error: (err) => {

        console.log(err);

      }

    });

  }

  //updataCartProduct

  changeCount(id:string , count:number):void {

    if (count > 0) {

      this._CartService.updataCartProduct(id , count).subscribe ({

        next: (response) => {



          console.log(response.data);
          this.cartDetails = response.data;
        },
        error: (err) => {
          console.log(err)
        }

      })


    }

  }

}

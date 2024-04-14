import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/interface/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit  {

  constructor(private _EcomdataService:EcomdataService , private _CartService:CartService , private _ToastrService:ToastrService) {}

  prodect:Product[] = [];

  categories:any[] = [];

  searchTrem:string = "";


  ngOnInit(): void {
    this._EcomdataService.getAllProducts().subscribe({

      next: (response) =>{

        this.prodect = response.data

      }

    })


    this._EcomdataService.getCategory().subscribe({

      next: (response) =>{

        this.categories = response.data
        console.log(this.categories)

      },
      error: (err) => {

      }

    })


  }

  addCart(id:string):void {

    this._CartService.addToCart(id).subscribe({

      next: (response) => {

        console.log(response);
        this._ToastrService.success(response.message , "Fresh Cart");
        this._CartService.cartNumber.next(response.numOfCartItems);

      },
      error: (err) => {
        console.log(err);
      }

    })

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/interface/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  // slider
  productSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay : true,
        items: 1,
    nav: false
  }

  ProdectDetails:Product = {} as Product;

  constructor(private _ActivatedRoute:ActivatedRoute ,
    private _EcomdataService:EcomdataService ,
     private _CartService:CartService
    , private _ToastrService:ToastrService) {}

  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe({

      next: (params) => {
        //      نبعت id في يلي موجوده في routing
       let idProdect:any =  params.get('id')

      //  api

      this._EcomdataService.getProductDetails(idProdect).subscribe({

        next: (response) => {

          this.ProdectDetails = response.data;

        },

        error: (err) => {

          console.log(err);

        }

      })


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

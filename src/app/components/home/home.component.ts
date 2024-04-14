import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';
import { Product } from 'src/app/shared/interface/product';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  // <!-- main slider -->
   mainSlider: OwlOptions = {
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

  // <!-- categories -->
  categoriesSliderOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay : true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }

  prodect:Product[] = [];

  categories:any[] = [];

  searchTrem:string = "";

  constructor(private _EcomdataService:EcomdataService , private _CartService:CartService , private _ToastrService:ToastrService) {}

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

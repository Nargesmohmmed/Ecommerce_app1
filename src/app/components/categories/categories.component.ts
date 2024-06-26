import { Component, OnInit } from '@angular/core';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private _EcomdataService:EcomdataService) {}

  categories:any[] = [];

  ngOnInit(): void {

    this._EcomdataService.getCategory().subscribe({

      next: (response) =>{

        this.categories = response.data
        console.log(this.categories)

      },
      error: (err) => {

      }

    })

  }


}

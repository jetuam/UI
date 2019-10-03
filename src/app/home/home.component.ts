import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Categories = "Categories";
  category;
  product;

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.service.getCate().subscribe(res => {
      this.category = res.categoryDetails;
    })

  }
}

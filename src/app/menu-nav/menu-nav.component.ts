import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service'

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {

  category;

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.service.getCate().subscribe(res => {
      console.log(res);
      this.category = res;
    })
  }

}

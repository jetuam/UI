import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  globalURL = environment.devPath;

  constructor(private http: HttpClient) { }

  getCate() {
    return this.http.get('http://10.117.189.127:8082/ingproductapp/categories/');
    //  return this.http.get('http://localhost:3000/category');
  }
  getProduct(catId) {
    return this.http.get('http://localhost:3000/product?cateid=' + catId);
  }
}

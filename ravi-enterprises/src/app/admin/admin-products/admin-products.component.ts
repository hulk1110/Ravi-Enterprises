import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy  {
  products:any[];
  subscription: Subscription;
  filteredProducts: any[];
  constructor(private productSevice: ProductService) {
    this.subscription = this.productSevice
    .getAll()
    .subscribe(products => (this.filteredProducts = this.products = products)); }

  ngOnInit() {

    
  }
  filter(query: string){
    this.filteredProducts = query
      ? this.products.filter(
          p =>
          p.payload.val().title.toLowerCase().includes(query.toLowerCase())
           
        )
      : this.products;

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

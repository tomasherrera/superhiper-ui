import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response} from '@angular/http';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: Http) { }

  public products: Product[] = [];

  getProducts() {
    return this.http.get('http://localhost:3000/products.json').subscribe(
      (res: Response) =>      {
        this.products = res.json();
        console.log(res)
      },
      error =>    {
        console.log(error);
      }
    );
  }
}

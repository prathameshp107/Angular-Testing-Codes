import { Component } from '@angular/core';

@Component({
  selector: 'app-fake-store-api',
  templateUrl: './fake-store-api.component.html',
  styleUrl: './fake-store-api.component.css'
})
export class FakeStoreApiComponent {


  ngOnInit(): void {
    // Implement your initialization logic here
    console.log('Component initialized');
    this.getdata();
  }

  ItemsArray:any = [];

  getdata(){
     fetch('https://fakestoreapi.com/products')
     .then(response => response.json())
     .then(data=>{

       this.ItemsArray = data;
       console.log(data);
     }
    )
  }


}

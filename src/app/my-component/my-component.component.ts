import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {

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

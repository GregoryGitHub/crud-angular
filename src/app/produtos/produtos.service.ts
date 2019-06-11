import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }

  getProducts(){
    return [
      {id:1,title:"Produto 1",description:"Description of Product 1",icon:"book"},
      {id:2,title:"Produto 2",description:"Description of Product 2",icon:"credit_card"},
      {id:3,title:"Produto 3",description:"Description of Product 3",icon:"event"},
      {id:4,title:"Produto 4",description:"Description of Product 4",icon:"explore"},
    ];
  }

}

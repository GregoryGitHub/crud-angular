import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {
  produtos:any;
  constructor(private pService:ProdutosService) {
    this.produtos = pService.getProducts();
  }
  listProdutos(){
    return this.produtos;
  }

  ngOnInit() {
  }

}

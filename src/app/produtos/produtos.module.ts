import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { ProdutosDetalhesComponent } from './produtos-detalhes/produtos-detalhes.component';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosService } from './produtos.service';

@NgModule({
  declarations: [
    ProdutosListaComponent, 
    ProdutosDetalhesComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[ProdutosService],
  exports:[ProdutosRoutingModule]
})
export class ProdutosModule { }

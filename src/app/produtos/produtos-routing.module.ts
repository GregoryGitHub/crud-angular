import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { ProdutosDetalhesComponent } from './produtos-detalhes/produtos-detalhes.component';


const routes: Routes = [
  {path:"produtos",component:ProdutosListaComponent},
  {path:"produto/:id",component:ProdutosDetalhesComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }

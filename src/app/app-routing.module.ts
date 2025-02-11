import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { WilliansComponent } from './views/willians/willians.component';
import { PedroComponent } from './views/pedro/pedro.component';
import { QuemComponent } from './views/quem/quem.component';
import { ContatoComponent } from './views/contato/contato.component';
import { ParceirosComponent } from './views/parceiros/parceiros.component';
import { PoliticaComponent } from './views/politica/politica.component';
import { PagenotfoundComponent } from './views/pagenotfound/pagenotfound.component';
import { FerramentasComponent } from './views/ferramentas/ferramentas.component';
import { LinksComponent } from './views/links/links.component';
import { ConstrucaoComponent } from './views/construcao/construcao.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'williansaugusto', component: WilliansComponent },
  { path: 'pedrohenrique', component: PedroComponent },
  { path: 'quemsomos', component: QuemComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'parceiros', component: ParceirosComponent },
  { path: 'politicadosite', component: PoliticaComponent },
  { path: 'ferramentas', component: FerramentasComponent },
  { path: 'link', component: LinksComponent },
  { path: 'construcao', component: ConstrucaoComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

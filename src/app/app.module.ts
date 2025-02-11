import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './views/home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { HttpClientModule } from '@angular/common/http';

import { WilliansComponent } from './views/willians/willians.component';
import { PedroComponent } from './views/pedro/pedro.component';
import { ContatoComponent } from './views/contato/contato.component';
import { QuemComponent } from './views/quem/quem.component';
import { ParceirosComponent } from './views/parceiros/parceiros.component';
import { LinksComponent } from './views/links/links.component';
import { PoliticaComponent } from './views/politica/politica.component';
import { PagenotfoundComponent } from './views/pagenotfound/pagenotfound.component';
import { FerramentasComponent } from './views/ferramentas/ferramentas.component';
import { ConstrucaoComponent } from './views/construcao/construcao.component';
import { TimeComponent } from './views/time/time.component';
import { VitoriaComponent } from './views/vitoria/vitoria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WilliansComponent,
    PedroComponent,
    ContatoComponent,
    QuemComponent,
    ParceirosComponent,
    LinksComponent,
    PoliticaComponent,
    PagenotfoundComponent,
    FerramentasComponent,
    ConstrucaoComponent,
    TimeComponent,
    VitoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

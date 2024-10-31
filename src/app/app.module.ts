import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdicionaContatoComponent } from './adiciona-contato/adiciona-contato.component';
import { FormsModule } from '@angular/forms';
import { ExibeFavoritosComponent } from './exibe-favoritos/exibe-favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    AdicionaContatoComponent,
    ExibeFavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

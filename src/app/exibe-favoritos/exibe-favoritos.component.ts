import { Component } from '@angular/core';
import { AgendaServiceService } from '../services/AgendaService/agenda-service.service';
import { Contato } from '../adiciona-contato/classes/contato';


@Component({
  selector: 'app-exibe-favoritos',
  templateUrl: './exibe-favoritos.component.html',
  styleUrl: './exibe-favoritos.component.css'
})
export class ExibeFavoritosComponent {
  contatos: Contato[];
  favs: Contato[];

  constructor(private agendaService: AgendaServiceService) { // Declare agendaService como privado
    this.contatos = this.agendaService.obterTodos();
    this.favs = []
  }

  obterFavoritos(){

     let favoritos = this.agendaService.obterTodos()

    for (let x = 0; x < favoritos.length; x++){

      let contato = favoritos[x]

      if(contato.getFav()){

        this.favs.push(contato)

      }

    }
    return undefined
  }
}


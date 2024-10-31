import { Component } from '@angular/core';
import { Tipo } from './classes/enumTipo';
import { Contato } from './classes/contato';
import { AgendaServiceService } from '../services/AgendaService/agenda-service.service';

@Component({
  selector: 'app-adiciona-contato',
  templateUrl: './adiciona-contato.component.html',
  styleUrl: './adiciona-contato.component.scss'
})
export class AdicionaContatoComponent {
  tipos: Tipo[]
  contatos: Contato[]
  
  constructor(private agendaService: AgendaServiceService) {
    this.tipos = Object.values(Tipo)
    this.contatos = this.agendaService.obterTodos();
  }

  adicionar(nome: string, telefone: string, email: string, aniversario:string, tipo: string, fav:boolean) {
    /*this.contatos.push(new Contato(nome, telefone, email, aniversario, this.setTipo(tipo), fav))
    window.alert(fav)*/
    let novoContato = new Contato(nome, telefone, email, aniversario, this.setTipo(tipo), fav)
    if (this.agendaService.adicionar(novoContato)) { // Usar o método do serviço para adicionar
      this.contatos.push(novoContato);
    }else {
    window.alert('Contato já existe!');
    }
  }
  setTipo(tipo: string){
    let tp: Tipo
    if (tipo === Tipo.amigo){
      tp = Tipo.amigo
    }
    else if(tipo === Tipo.familia){
      tp = Tipo.familia
    }
    else if (tipo === Tipo.trabalho){
      tp = Tipo.trabalho
    }
    else {
      tp = Tipo.outro
    }
    return tp
  }




}

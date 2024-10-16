import { Component } from '@angular/core';
import { Tipo } from './classes/enumTipo';
import { Contato } from './classes/contato';

@Component({
  selector: 'app-adiciona-contato',
  templateUrl: './adiciona-contato.component.html',
  styleUrl: './adiciona-contato.component.scss'
})
export class AdicionaContatoComponent {
  tipos: Tipo[]
  contatos: Contato[]
  constructor() {
    this.tipos = Object.values(Tipo)
    this.contatos = []
  }

  adicionarContato(nome: string, telefone: string, email: string, aniversario:string, tipo: string) {
    this.contatos.push(new Contato(nome, telefone, email, aniversario, this.setTipo(tipo)))
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

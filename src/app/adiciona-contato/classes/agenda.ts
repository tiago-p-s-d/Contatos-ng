import { Contato } from "./contato";
import { Tipo } from "./enumTipo";
  
class Agenda{

    private __dono: string
    private contatos: Contato[] = []

    constructor(dono: string){
        this.__dono = dono
    }


    cadastrarContato(contato: Contato){
        this.contatos.push(contato)
    }


    getContatos() {

        return this.contatos

    }


    SuperGetContatos(search: any, metodo: string){

      let contato: Contato | undefined;

        if(metodo == 'email'){
            for(let x = 0; x < this.contatos.length; x++){
                if (this.contatos[x].getEmail() == search){
                  contato = this.contatos[x]
                }
                else{
                  contato = undefined
                }
            }
        }

        else if (metodo == 'telefone'){
            for(let x = 0; x < this.contatos.length; x++){
                if (this.contatos[x].getTelefone() == search){
                  contato = this.contatos[x]
                }
                else{
                  contato = undefined
                }
            }
        }
        else if (metodo == 'nome'){
            for(let x = 0; x < this.contatos.length; x++){
                if (this.contatos[x].getNome() == search){
                  contato = this.contatos[x]
                }
                else{
                  contato = undefined
                }
            }
        }

        else {
          contato = undefined
        }
        return contato
    }

}


let helo = new Contato('helo', '982198219', 'helo123@gmail.com', '17/09', Tipo.amigo)
let jose = new Contato('jose', '9323827382', 'joseis@gmail.com', '6/9', Tipo.amigo)
let brunao = new Contato('brunao', '9128812918', 'brunao@gmail.com', '17/09', Tipo.amigo)


let agenda1 = new Agenda ('tiago')

agenda1.cadastrarContato(helo)
agenda1.cadastrarContato(jose)
agenda1.cadastrarContato(brunao)



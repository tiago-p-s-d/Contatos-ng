import { Tipo } from "./enumTipo";

export class Contato{

    private nome: string;
    private telefone: string;
    private email: string;
    private aniversario: string;

    private tipo: Tipo;


    constructor(nome: string, telefone: string, email: string, aniversario: string, tipo: Tipo){

        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.aniversario = aniversario;
        this.tipo = tipo;
    }


    getNome(){
        return this.nome
    }
    setNome(nome:string){
        this.nome = nome
    }
    getTelefone(){
        return this.telefone
    }
    setTelefone(telefone:string){
        this.telefone = telefone
    }
    getEmail(){
        return this.email
    }
    setEmail(email:string){
        this.email = email
    }
    getAniversario(){
        return this.aniversario
    }
    setAniversario(aniversario:string){
        this.aniversario = aniversario
    }
    getTipo(){
        return this.tipo
    }
    setTipo(tipo:Tipo){
        this.tipo = tipo
    }



}


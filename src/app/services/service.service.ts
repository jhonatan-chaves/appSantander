import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})


export class ServiceService {




private pessoas : Array< any>  = ["125", "bulma", "piculo"];

 private pessoaa = [
  {
    nome: "jhonatan",
    senha: "1234",
    dinheiro: "250.000.00"
  },
  {
    nome: "goku",
    senha: "202020",
    dinheiro: "10.544,26"
  },
  {
    nome: "luffy",
    senha: "hojenao",
    dinheiro: "2.325,12",
  }
]

nomes = this.pessoaa.map(person => person.nome);
senhas = this.pessoaa.map(person => person.senha);
dinheiros = this.pessoaa.map(person => person.dinheiro);


public getObjeto(){
  return this.pessoaa;
}


public getPessoas(): Array<string>{
  return this.pessoas;
}


public setValor(value: any){
  return value;
}





public valid(senha: any){
  if(this.senhas.includes(senha)){
    return this.goToLogin();
  }else{
     this.presentToast();
  }

}
  constructor( private router: Router, private toastController: ToastController) { }


  goToLogin(){
    this.router.navigate(['tabs']);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'senha eletronica invalida!',
      duration: 2000,
      position: 'top',
    });

    await toast.present();
  }
}

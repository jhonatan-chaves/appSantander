import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {


private pessoas : Array< any>  = [125, "bulma", "piculo"]
private senha1: any = 125;

public getPessoas(): Array<string>{
  return this.pessoas;
}


public setValor(value: any){
  return value;
}


public valid(senha: any){
  if(this.pessoas.includes(senha)){
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

import { ServiceLService } from './service-l.service';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.page.html',
  styleUrls: ['./tela-login.page.scss'],
})

 
export class TelaLoginPage implements OnInit {

  public senha: any;
  private senhas: any;
  public  pessoa : any ;
  private pessoas: any;
  private dinheiro: any;
  private nome : any ;

  

  constructor( public serviceService : ServiceService ) { }
  
 
 

  ngOnInit() { 
    this.senha = this.serviceService.senhas;
    this.dinheiro = this.serviceService.dinheiros;
    this.nome = this.serviceService.nomes;
    this.pessoas = this.serviceService.getPessoas;

    this.pessoa = {
      nome: this.nome,
      senhas: this.senha,
      dinheiro: this.dinheiro,
      pessoas: this.pessoas
    }

   
  }

}

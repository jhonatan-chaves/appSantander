import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.page.html',
  styleUrls: ['./tela-login.page.scss'],
})


export class TelaLoginPage implements OnInit {

  public senha: any;

  constructor( public serviceService : ServiceService ) { }
  
 

  ngOnInit() {
  }

}

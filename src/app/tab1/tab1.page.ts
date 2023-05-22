import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public options: Array<any> =[
    { icon: 'person-add-outline', text: 'indicar amigos'},
    { icon: 'phone-portrait-outline', text: 'recarga de celular'},
    { icon: 'wallet-outline', text: 'depositar'},
    { icon: 'options-outline', text: 'ajustar limite'}

  ];
  constructor() {}

}

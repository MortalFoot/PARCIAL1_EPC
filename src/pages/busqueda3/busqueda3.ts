import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api3Page } from '../api3/api3';

/**
 * Generated class for the Busqueda3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busqueda3',
  templateUrl: 'busqueda3.html',
})
export class Busqueda3Page {

  casas = [];
  items =[];
  CON= Api3Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.casas = this.navParams.get('casas')

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusquedaPage');
  }

  getItems(ev){

    console.log(ev.target.value);
  
    
  
    this.items = this.casas.filter(casas=> {
  
    return  casas.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase());
  
    })
     
  
    }
  
    VerCasa(casa) {
  
     this.navCtrl.push(this.CON, {casa: casa});
  
  
    }
  
  }

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api1Page } from '../api1/api1';

/**
 * Generated class for the BusquedaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class BusquedaPage {

  consolas = [];
  items =[];
  CON = Api1Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.consolas = this.navParams.get('consolas')

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusquedaPage');
  }

  getItems(ev){

    console.log(ev.target.value);
  
    
  
    this.items = this.consolas.filter(consola => {
  
    return consola.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase());
  
    })
     
  
    }
  
    VerConsolas(consola) {
  
     this.navCtrl.push(this.CON, {consola: consola});
  
  
    }
  
  }




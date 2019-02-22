import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api2Page } from '../api2/api2';

/**
 * Generated class for the Busqueda2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busqueda2',
  templateUrl: 'busqueda2.html',
})
export class Busqueda2Page {

  animales = [];
  items =[];
  CON= Api2Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.animales = this.navParams.get('animales')

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusquedaPage');
  }

  getItems(ev){

    console.log(ev.target.value);
  
    
  
    this.items = this.animales.filter(animales => {
  
    return  animales.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase());
  
    })
     
  
    }
  
    VerAnimales(animal) {
  
     this.navCtrl.push(this.CON, {animal: animal});
  
  
    }
  
  }



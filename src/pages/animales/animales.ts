import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Api2Page } from '../api2/api2';
import { Busqueda2Page } from '../busqueda2/busqueda2';
import { FavoritossProvider } from '../../providers/favoritoss/favoritoss';

/**
 * Generated class for the AnimalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animales',
  templateUrl: 'animales.html',
})
export class AnimalesPage {

  animales=[];
  AP2 = Api2Page;
  bus = Busqueda2Page;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient
  ) {

    this.http.get('/v1/klfst?&category=4020&offset=1&lim=29&lang=es').subscribe(data => {
    
      //console.log(JSON.stringify(data));

      if (data.hasOwnProperty('list_ads')){
   
        this.animales = data["list_ads"];
  
      }
  
     }, 
     error => {
  
         //console.log(JSON.stringify(error));
        });
  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalesPage');
  }

  verAnimales(animal){

    this.navCtrl.push(this.AP2, {animal: animal})

    }

   
    Buscar(){

      this.navCtrl.push(this.bus, {animales: this.animales})
   
       }


}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api3Page } from '../api3/api3';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Busqueda3Page } from '../busqueda3/busqueda3';

/**
 * Generated class for the RemodelacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-remodelaciones',
  templateUrl: 'remodelaciones.html',
})
export class RemodelacionesPage {

  casas=[];
  AP3 = Api3Page;
  bus = Busqueda3Page;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {

    this.http.get('/v1/klfst?&category=8020&offset=1&lim=29&lang=es').subscribe(data => {
    
      //console.log(JSON.stringify(data));

      if (data.hasOwnProperty('list_ads')){
   
        this.casas = data["list_ads"];
  
      }
  
     }, 
     error => {
  
         //console.log(JSON.stringify(error));
        });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemodelacionesPage');
  }

  verCasa(casa){
  
    this.navCtrl.push(this.AP3, {casa: casa})
    
  }

  ALV(){

    this.navCtrl.push(this.bus, {casas: this.casas})
 
     }

}

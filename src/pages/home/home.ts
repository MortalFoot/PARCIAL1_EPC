import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Api1Page } from '../api1/api1';
import { BusquedaPage } from '../busqueda/busqueda';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  consolas=[];
  AP1= Api1Page;
  bus= BusquedaPage;

  constructor(public navCtrl: NavController, public http:HttpClient) {

    this.http.get('/v1/klfst?&category=5060&offset=1&lim=29&lang=es').subscribe(data => {
    
      //console.log(JSON.stringify(data));

      if (data.hasOwnProperty('list_ads')){
   
        this.consolas = data["list_ads"];
  
      }
  
     }, 
     error => {
  
         //console.log(JSON.stringify(error));
        });
  
    }

    verConsolas(consola){

    this.navCtrl.push(this.AP1, {consola: consola})

    }

    buscar(){

   this.navCtrl.push(this.bus, {consolas: this.consolas})

    }
  

  }



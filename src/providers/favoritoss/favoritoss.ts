import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ToastController} from 'ionic-angular';

/*
  Generated class for the FavoritossProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritossProvider {

  favoritos = [];

  constructor(public toastCtrl:ToastController) {
    console.log('Hello FavoritossProvider Provider');
  }

  remove(consola){
   
    let index = this.favoritos.findIndex(item => {return item.ad.subject == consola.ad.subject && item.ad.user.account.name == consola.ad.user.account.name});
    
    if (index >-1){
 
     this.favoritos.splice(index, 1);
 
     const toast = this.toastCtrl.create({
       message: 'Producto eliminado de favoritos',
       duration: 3000,
       position: 'top'
     });
 
     
   toast.present();
 
     
   }
 
 
   }
 
   
   existe(consola){
 
   return this.favoritos.some(item => {return item.ad.subject == consola.ad.subject && item.ad.user.account.name == consola.ad.user.account.name;})
 
   }
 
   addFavoritos(consola){
 
   this.favoritos.push(consola);
 
   const toast = this.toastCtrl.create({
     message: 'Producto agregado a favoritos',
     duration: 3000,
     position: 'top'
   });
 
   toast.present();
 
 
 
   }

   
 
   getFavoritos(){
 
   return this.favoritos;
 
   }
 
 }
 

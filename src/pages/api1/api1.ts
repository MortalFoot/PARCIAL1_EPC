import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritossProvider } from '../../providers/favoritoss/favoritoss';

/**
 * Generated class for the Api1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-api1',
  templateUrl: 'api1.html',
})
export class Api1Page {

  consola={};
  imgs=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public fav: FavoritossProvider) {
 
 this.consola = this.navParams.get('consola');

 if(this.consola.ad.hasOwnProperty('images')){

  this.imgs = this.consola.ad.images;

 }
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Api1Page');
  }

  favoritos(consola) {

  this.fav.addFavoritos(consola);

  }
  

}

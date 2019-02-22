import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritossProvider } from '../../providers/favoritoss/favoritoss';

/**
 * Generated class for the Api2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-api2',
  templateUrl: 'api2.html',
})
export class Api2Page {

  animal={};
  imgs=[];


  constructor(public navCtrl: NavController, public navParams: NavParams,
  public fav: FavoritossProvider) {
  
    this.animal = this.navParams.get('animal');

    if(this.animal.ad.hasOwnProperty('images')){
   
     this.imgs = this.animal.ad.images;
   
    }
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Api2Page');
  }

  favoritos(consola){

  this.fav.addFavoritos(consola);

  }

}

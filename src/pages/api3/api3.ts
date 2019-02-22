import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritossProvider } from '../../providers/favoritoss/favoritoss';

/**
 * Generated class for the Api3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-api3',
  templateUrl: 'api3.html',
})
export class Api3Page {

  casa={};
  imgs=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public fav: FavoritossProvider) {

    this.casa = this.navParams.get('casa');

    if(this.casa.ad.hasOwnProperty('images')){
   
     this.imgs = this.casa.ad.images;
   

  }

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Api3Page');
  }

  favoritos(consola) {

    this.fav.addFavoritos(consola);
  
    }

}

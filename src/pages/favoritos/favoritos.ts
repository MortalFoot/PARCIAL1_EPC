import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api1Page } from '../api1/api1';
import { FavoritossProvider } from '../../providers/favoritoss/favoritoss';
import { Api2Page } from '../api2/api2';
import { Api3Page } from '../api3/api3';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {

  items = [];
  ConsolaP = Api1Page;
  An= Api2Page;
  Cas = Api3Page;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavoritossProvider) {
  
    this.items = this.fav.getFavoritos();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }

  VerConsolas(consola){

    this.navCtrl.push(this.ConsolaP,{consola: consola} )


  }

  VerAnimales(animal){

    this.navCtrl.push(this.An,{animal: animal} )


  }


  VerCasas(casa){

    this.navCtrl.push(this.Cas,{casa: casa} )


  }

}

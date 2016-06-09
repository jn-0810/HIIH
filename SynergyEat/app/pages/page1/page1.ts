import {NavController} from 'ionic-angular';
import {RedIce} from '../RedIce/RedIce';

@Page({
  templateUrl: 'build/pages/page1/page1.html'
}) 

export class Page1 {
  constructor(public nav: NavController) 
      this.nav = nav;
  }
}

public changePage() {
   this.nav.push(RedIce);
}
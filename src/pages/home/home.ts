import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dreams = ['', '', '', '', ''];
  dreamsText = ['', '', '', '', ''];
  current_num : number;
  constructor(public navCtrl: NavController) {
    this.current_num = 0;
  }

  onClickNext() {
    if(this.dreams[this.current_num] == "")
      return;
    this.current_num ++;
    this.dreamsText[this.current_num - 1] = 'What I dream about "' + this.dreams[this.current_num - 1] + '"';
  }

}

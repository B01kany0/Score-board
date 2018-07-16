import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScorePage } from '../score/score';
import { Goals } from '../../app/arry';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  home;
  away;

  constructor(public navCtrl: NavController) {

  }
  scorePage(){

    if (this.home != this.away || this.away!= this.home){
    let  obj = new Team(this.home,this.away) ;
    arr.push(obj);

    
    

    this.navCtrl.push(ScorePage);
    console.log(arr)
    }
    window.alert("Please check the teams you've entered")
    
  }}




  export class Team {
    a;
    b;
    
    constructor(a, b) {
      this.a=a;
      this.b=b;
  
  
    }
  }
  
  
  var arr = new Array() ;
  
  export default arr ;
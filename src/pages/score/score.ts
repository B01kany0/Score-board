import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import goals from '../../app/vari';
import arr, { Team, HomePage } from '../home/home';
import { core } from '@angular/compiler';
import { EndmatchPage } from '../endmatch/endmatch';






/**
 * Generated class for the ScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {
  team;
  home=0;
  away=0;
  teamGoals = goals;


  awe=arr;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

check(team){
  this.team =team;
}
// checkB(score){
//   this.team =score;
// }

try(){
  if (this.team == 'A'){
    //firstly create a new abject that will store the goals and team name.
    var obj= new Teamscore(5,"A")
    this.home = this.home +5;
    //this is where I get to push them to the array.
    this.teamGoals.push(obj);
  
    console.log(this.teamGoals);
    
  }
  else{
    var obj= new Teamscore(5,"B");
    this.teamGoals.push(obj);
    this.away = this.away +5;
  }
 
}
pen(){
  if (this.team == 'A'){
    var obj= new Teamscore(3,"A")
    this.home = this.home +3;
    this.teamGoals.push(obj);
  
    console.log(this.teamGoals);
    
  }
  else{
    var obj= new Teamscore(3,"B");
    this.teamGoals.push(obj);
    this.away = this.away +3;
  }
}
conve(){
  if (this.team == 'A'){
    var obj= new Teamscore(2,"A")
    this.home = this.home +2;
    this.teamGoals.push(obj);
  
    console.log(this.teamGoals);
  }
  else{
    var obj= new Teamscore(2,"B");
    this.teamGoals.push(obj);
    this.away = this.away +2;
  }
}

undotry(){
  var s = 0;
  if (this.team == 'A'){
  for (let index = 0; index < this.teamGoals.length; index++) {
    if (this.teamGoals[index].score == 5 && this.teamGoals[index].teamName == "A"){
       s = index; 
       this.teamGoals.splice(s,1);
       this.home = this.home -5;
       if (this.home < 0){
        this.home =0;
      }
  
    }
    
  }
    
  }
  else{ 
    for (let index = 0; index < this.teamGoals.length; index++) {
      if (this.teamGoals[index].score == 5 && this.teamGoals[index].teamName == "B"){
         s = index; 
         this.teamGoals.splice(s,1);
         this.away = this.away -5;
         if (this.away < 0){
          this.away =0;
        }
    
      }
      
    }
  }
 
}
undopen(){
  var s = 0;
  if (this.team == 'A'){
  for (let index = 0; index < this.teamGoals.length; index++) {
    if (this.teamGoals[index].score == 3 && this.teamGoals[index].teamName == "A"){
       s = index; 
       this.teamGoals.splice(s,1);
       this.home = this.home -3;
       if (this.home < 0){
        this.home =0;
      }
  
    }
    
  }
    
  }
  else{
    for (let index = 0; index < this.teamGoals.length; index++) {
      if (this.teamGoals[index].score == 3 && this.teamGoals[index].teamName == "B"){
         s = index; 
         this.teamGoals.splice(s,1);
         this.away = this.away -3;
         if (this.away < 0){
          this.away =0;
        }
    
      }
      
    }
  }
 
}
undoconve(){
  var s = 0;
  if (this.team == 'A'){
  for (let index = 0; index < this.teamGoals.length; index++) {
    if (this.teamGoals[index].score == 2 && this.teamGoals[index].teamName == "A"){
       s = index; 
       this.teamGoals.splice(s,1);
       this.home = this.home -2;
       if (this.home < 0){
        this.home =0;
      }
  
    }
    
  }
    
  }
  else{
    for (let index = 0; index < this.teamGoals.length; index++) {
      if (this.teamGoals[index].score == 3 && this.teamGoals[index].teamName == "B"){
         s = index; 
         this.teamGoals.splice(s,1);
         this.away = this.away -3;
    if (this.away<0){
      this.away =0;
    }
  }
}
}
}
names = arr
remove(){
  this.team = []
  this.names = [];
  console.log
  this.navCtrl.push(HomePage);
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorePage');

    console.log(arr);
  }
  EndMatchPage(){
    //comparing our 2 team scores
  if(this.home> this.away){
  alert(this.home +" wins");
  }else if(this.home < this.away){
  alert(this.away +  " wins")
  }else{
    alert("Draw")
  }
    this.navCtrl.push(EndmatchPage);
    console.log(Teamscore)
  }

}

export class Teamscore{
  score:number;
  teamName:string
   constructor(score:number,teamName:string){
     this.score=score;
     this.teamName=teamName;

   }
}



import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent{
  Name: string ='Athar';
  status: string ='Online';
  leftCreationStatus ='form is not submit';

  allownewuser = false;
  constructor()  {
    setTimeout(() => {
      this.allownewuser=true;
    }, 2000);
  }
  onCreation (){
    this.leftCreationStatus='Form is Submitted';
  }
}

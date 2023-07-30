import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sites';
  showValueDiv:boolean = true;

  ngOnInit(){
    if (window.sessionStorage.getItem("popup-exibida")=="1"){
      this.showValueDiv = false;

    }
  }
  setPopUp(){
    window.sessionStorage.setItem("popup-exibida", "1");
    console.warn("setPop"+window.sessionStorage.getItem("popup-exibida"));
    this.showValueDiv = false;

  }
}

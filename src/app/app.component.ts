import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'NewsApp';

  constructor(private router: Router) {}
  
  catagory : any

  apiURL : any 

  ngOnInit(): void {
    this.all()
  }
  
  all(){
    this.apiURL="https://newsapi.org/v2/top-headlines?country=in&apiKey=ca944eccc1c449e28226fda8c8286b33"
    this.catagory = "India"
    this.sendcatagory()
  }
  sports(){
    this.apiURL="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=ca944eccc1c449e28226fda8c8286b33"
    this.catagory = "Sports"
    this.sendcatagory()
  }
  tech(){
    this.apiURL="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=ca944eccc1c449e28226fda8c8286b33"
    this.catagory = "Technology"
    this.sendcatagory()
  }
  business(){
    this.apiURL="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ca944eccc1c449e28226fda8c8286b33"
    this.catagory = "Business"
    this.sendcatagory()
  }
  sci(){
    this.apiURL="https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=ca944eccc1c449e28226fda8c8286b33"
    this.catagory = "Science"
    this.sendcatagory()
  }
  health(){
    this.apiURL="https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=ca944eccc1c449e28226fda8c8286b33"
    this.catagory = "Health"
    this.sendcatagory()
  }
  ent(){
    this.apiURL="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=ca944eccc1c449e28226fda8c8286b33"
    this.catagory = "Entertainment"
    this.sendcatagory()
  }

  sendcatagory(){
      console.log(this.apiURL)
      this.router.navigate(["/news",{"url":this.apiURL,"catagory":this.catagory}]);
  }
}

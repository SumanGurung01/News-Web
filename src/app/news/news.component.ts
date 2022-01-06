import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  allnews : any
  pernews : any
  catagory : any
  url : any = "https://newsapi.org/v2/top-headlines?country=in&apiKey=ca944eccc1c449e28226fda8c8286b33";

  constructor(private http:HttpClient, private route:ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
    console.log(this.url)
   
    this.route.params.subscribe((receivedData : any) => {   //get api based on selection
        console.log("Recieced api",this.url)
        this.url = receivedData["url"];
        this.catagory = receivedData["catagory"]
        
        this.http.get(this.url).subscribe((data:any)=>{   //fetch data from api
          this.allnews = data;
          this.pernews = this.allnews.articles;
          console.log("onscreen",this.url,this.pernews)
        });
    });
  }

}

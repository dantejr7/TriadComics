import { Component,OnInit } from '@angular/core';
import { ComicserviceService } from '../comicservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:any=[]
  searchData:any=""

  constructor(private es:ComicserviceService,private rout:Router) { }

  ngOnInit(): void {
    this.es.getAllProducts().subscribe({
      next:(result:any)=>{
          this.products=result.message
      }
    })
  }

  viewPage(){
    if (localStorage.getItem("user")) {
      // console.log(id);
      //  this.rout.navigateByUrl("product-view")
    } else {
      alert("Login to view the comics")
      this.rout.navigateByUrl("user-login")
    }
  }

  accessData(event:any){
    this.searchData=event.target.value
    console.log(this.searchData);
  }

}

import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicserviceService } from '../comicservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  user:any=[]
  constructor(private ar:ActivatedRoute,private es:ComicserviceService,private rout:Router) { }

  ngOnInit(): void {
  }

  isloggedin(){
    if(localStorage.getItem("user")==null){
      return false;
    }
    else{
      return true;
    }
  }

  logout() {
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user')
      this.rout.navigateByUrl("user-login")
      }
      else {
        alert("not logged in")
      }
  }

}

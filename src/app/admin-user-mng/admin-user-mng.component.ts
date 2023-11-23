import { Component,OnInit } from '@angular/core';
import { ComicserviceService } from '../comicservice.service';

@Component({
  selector: 'app-admin-user-mng',
  templateUrl: './admin-user-mng.component.html',
  styleUrls: ['./admin-user-mng.component.css']
})
export class AdminUserMngComponent implements OnInit{

  users:any=[]
  constructor(private es:ComicserviceService ) { }

  ngOnInit(): void {
   this.getUsers()
  }

  getUsers(){
    this.es.getAllUsers().subscribe({
      next:(result:any)=>{
        this.users=result.message
      }
    })
  }

  deleteUsers(id:any){
    this.es.deleteUser(id).subscribe({
      next:(result:any)=>{
        alert(result.message)
        this.es.getAllUsers().subscribe({
          next:(result:any)=>{
            // console.log(result.message);
            this.users=result.message
          }
        })
      }
    })
  }

}

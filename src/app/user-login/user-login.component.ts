import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ComicserviceService } from '../comicservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{

  userLoginForm = this.fb.group({
    email: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]],
    psw: ['',[Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })

  constructor(private fb:FormBuilder,private es:ComicserviceService,private rout:Router) { }

  ngOnInit(): void {
    
  }

  userLogin(){
    this.es.userlogin(this.userLoginForm.value.email,this.userLoginForm.value.psw).subscribe({
      next:(result:any)=>{
        localStorage.setItem("user",result._id)
        this.rout.navigateByUrl("")
      },
      error:(result:any)=>{
        alert(result.error.message)
        this.rout.navigateByUrl("user-register")
      }
    })
  }

}

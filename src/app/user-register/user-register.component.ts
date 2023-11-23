import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ComicserviceService } from '../comicservice.service';
import { ResourceLoader } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit{
  
  userRegisterForm=this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    propic: ['']
  })
  constructor(private fb:FormBuilder,private es:ComicserviceService,private rout:Router) { }

  ngOnInit(): void {
    
  }

  register(){
    this.es.userRegister(this.userRegisterForm.value.email,this.userRegisterForm.value.psw,
      this.userRegisterForm.value.uname,this.userRegisterForm.value.propic).subscribe({
        next:(result:any)=>{
          alert(result.message)
          this.rout.navigateByUrl('user-login')
        },
        error:(result:any)=>{
          alert(result.error.mesage)
        }
      })
  }

}

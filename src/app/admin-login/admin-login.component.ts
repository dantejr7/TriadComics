import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ComicserviceService } from '../comicservice.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminloginForm=this.fb.group({
    auname:[''],
    apsw:['']
  })

  constructor(private fb:FormBuilder,private rout:Router,private cs:ComicserviceService) { }

  ngOnInit(): void {
  }
  adminlogin(){
    this.cs.adminlogin(this.adminloginForm.value.auname,this.adminloginForm.value.apsw).subscribe({
      next:(result:any)=>{
        this.rout.navigateByUrl('admin-home')
      },
      error:(result:any)=>{
        alert(result.error.message)
      }
    })

  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComicserviceService } from '../comicservice.service';

@Component({
  selector: 'app-admin-product-mng',
  templateUrl: './admin-product-mng.component.html',
  styleUrls: ['./admin-product-mng.component.css']
})
export class AdminProductMngComponent implements OnInit{

  pdata:any=[]

  constructor(private rout:Router,private es:ComicserviceService){ }

  ngOnInit(): void {
    this.es.getAllProducts().subscribe({
      next:(result:any)=>{
        // console.log(result.message);
        this.pdata=result.message
      }
    })
  }

  addPage(){
    this.rout.navigateByUrl("admin-add-product")
  }

  editPage(id:any){
    this.rout.navigateByUrl(`admin-edit-product/${id}`)
  }

  deleteProduct(id:any){
    this.es.deleteProduct(id).subscribe({
      next:(result:any)=>{
        alert(result.message)
        this.es.getAllProducts().subscribe({
          next:(result:any)=>{
            // console.log(result.message);
            this.pdata=result.message
          }
        })
      }
    })
  }

}

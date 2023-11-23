import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ComicserviceService } from '../comicservice.service';


@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit{

  constructor(private fb:FormBuilder,private es:ComicserviceService){
  }

  addProductForm=this.fb.group({
      pname:[''],
      pagea:[''],
      pageb:[''],
      pagec:[''],
      rating:['']
  })

  ngOnInit(): void {
    
  }

  addNewProduct(){

    const path=this.addProductForm.value

    const bodyData={
      pname:path.pname,
      pagea:path.pagea,
      pageb:path.pageb,
      pagec:path.pagec,
      rating:path.rating
    }
    
    this.es.addProduct(bodyData).subscribe({
      next:(result:any)=>{
        alert("new product added")
        this.addProductForm.reset()
      }
    })

  }

}

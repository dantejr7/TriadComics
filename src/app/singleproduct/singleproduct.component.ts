import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicserviceService } from '../comicservice.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit{

  pid:any=""
  pdata:any=""
  constructor(private ar:ActivatedRoute,private es:ComicserviceService,private rout:Router) { }

  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      console.log('product',data);
      
      this.pid=data.id
      this.es.getProduct(this.pid).subscribe({
        next:(result:any)=>{
          this.pdata=result.message
        }
      })
    })
  }

}

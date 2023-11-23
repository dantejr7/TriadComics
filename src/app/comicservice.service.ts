import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicserviceService {

    search=new BehaviorSubject("")

    // baseUrl='http://localhost:3009'
    baseUrl='https://triad-server.onrender.com'

  constructor(private http:HttpClient) { }

    //api to admin login
    adminlogin(uname:any,psw:any){
      const body={
        uname,psw
      }
      return this.http.post(`${this.baseUrl}/admin/login`,body)
    }

    //adi to add new product
    addProduct(body:any){
      return this.http.post(`${this.baseUrl}/admin/add-product`,body)
    }

    //api to get all products
    getAllProducts(){
      return this.http.get(`${this.baseUrl}/product-access`)
    }

    deleteProduct(id:any){
      return this.http.delete(`${this.baseUrl}/product-delete/${id}`)
    }

    // api to get single product data
    getProduct(id:any){
    return this.http.get(`${this.baseUrl}/one-product/${id}`)
    }

    //api to edit product
    editProduct(id:any,bodyData:any){
      return this.http.put(`${this.baseUrl}/product-update/${id}`,bodyData)
    }

    //api to user register
    userRegister(email:any,psw:any,uname:any,propic:any){
      const body={email,psw,uname,propic}
      return this.http.post(`${this.baseUrl}/user-signUp`,body)
    }

    userlogin(email:any,psw:any){
      const body={email,psw}
      return this.http.post(`${this.baseUrl}/user-login`,body)
    }

    //api to fetch users
    getAllUsers(){
      return this.http.get(`${this.baseUrl}/user-access`)
    }

    //api to delete user
    deleteUser(id:any){
      return this.http.delete(`${this.baseUrl}/user-delete/${id}`)
    }


  }

    
  
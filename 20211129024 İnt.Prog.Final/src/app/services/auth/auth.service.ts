import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';

import {GoogleAuthProvider} from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firebaseAuth: AngularFireAuth,private router : Router,) { }
  async signIn(email: string, password: string){
    await this.firebaseAuth
   .signInWithEmailAndPassword(email,password)
   .then((res) => {
     this.lsSetItem("user", JSON.stringify(res.user));
     this.router.navigate(['/']);
     
   });
 }

 async gmailSignIn(){
   return await this.firebaseAuth.signInWithPopup(new GoogleAuthProvider()).then(res =>{
     this.lsSetItem('user',JSON.stringify(res.user));
     this.router.navigate(['/']);
   });
 }

 async signUp(email: string, password: string){
   return await this.firebaseAuth.createUserWithEmailAndPassword(email,password).then(res => {
     this.lsSetItem('user' , JSON.stringify(res.user));
     this.router.navigate(['/']);
   });
 }
 logout(){
  localStorage.clear();
  this.firebaseAuth.signOut();
  this.router.navigate(['/login']);
 }


 lsSetItem(key: string, body: string){
   localStorage.setItem(key,body);

 }
 lsGetItem(key: string){
   return JSON.parse(localStorage.getItem(key)  || '{}');

 }
}

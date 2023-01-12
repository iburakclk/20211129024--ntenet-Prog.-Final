import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(
    public servis: DataService,
    private  AuthService: AuthService
  ) {

  }

  ngOnInit(): void {

  }
  logout(){
    this.AuthService.logout();
  }

}


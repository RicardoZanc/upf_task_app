import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  task: any;

  constructor(public router: Router, public nav: NavController) {
    
    if (router.getCurrentNavigation()!.extras.state) {
      this.task = this.router.getCurrentNavigation()!.extras.state;
      console.log(this.task);
    }
  }

  ngOnInit() {
  }

}

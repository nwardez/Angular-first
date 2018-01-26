import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public appService : AppService) { //Dans le constructeur, on déclare le AppService en paramètre

   }

  ngOnInit() {
  }

  selectMenu(menu): void {
    this.appService.selectedMenu = menu;
  }

}

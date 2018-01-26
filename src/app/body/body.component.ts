import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  //selectedMenu='Experience';

  constructor(public appService : AppService) { // On importe la appService également dans le constructeur (comme pour body)

  }

  

  ngOnInit() {
  }

}

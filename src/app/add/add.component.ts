import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { TodoClass } from '../todo-class';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  monTodo: "Entrez une TODO";

  constructor(public todoService : TodoService) { }

 

  ngOnInit() {
  }

}

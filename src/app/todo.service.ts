import { Injectable } from '@angular/core';
import { TodoClass } from './todo-class';


@Injectable()
export class TodoService {

  listTodo = [];
   
  

  constructor() { }

  ajouterListeTodo (monName) {
    const monAjout = new TodoClass(this.listTodo.length,monName);
    this.listTodo.push(monAjout);
  }

  supprimerTodo (monTodo: TodoClass) {
    this.listTodo.splice(this.listTodo.indexOf(monTodo),1);
  }

  editerTodo (monTodo: TodoClass) {
   monTodo.editable = true;
   
  }

  changer(monTodo: TodoClass,name:string) {
    monTodo.name= name;
    monTodo.editable=false;
  }

}

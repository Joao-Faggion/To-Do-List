import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../header/modules/home/model/task-list';
import { first } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public tasklist: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]' ); //JSON.parse processo contrário da stringify, ele transforma strings em array//
  constructor(){ }

  ngDoCheck(): void {
    this.setLocalStorage();
    }
  

  public setEmitTaksList(event: string){
    this.tasklist.push({  task: event, checked:false  });

  }

  public deleteItemTaskList(event: number){
    this.tasklist.splice(event, 1);
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Todas suas tarefas serão apagadas! COntinuar?");
    if(confirm){
      this.tasklist = [];
    }
  }

  public validationInput(event: string, index: number){
    if(!event.length){
      const confirm = window.confirm("Tarefa Vazia, deseja deletar?");

    if(confirm){
      this.deleteItemTaskList(index);
    }  
    }
  }

  public setLocalStorage(){
    if(this.tasklist){
      this.tasklist.sort( (first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.tasklist)); 
      //JSON.stringify converte qualquer objeto em uma String!//
     } 
    }

}

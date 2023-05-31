import { Component, OnInit } from '@angular/core';
import { ToDoInterface } from '../Models/to-do-interface.model';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  items!: ToDoInterface[];
  inputItem: string = "";

  constructor(){}

  ngOnInit() {
    this.items = [
      {
        content: "First Item",
        completed: false
      },
      {
        content: "Second Item",
        completed: true
      }
    ]

  }

  onHandleStatus(id: number){
    this.items.map( (strike, i) => {
      if (i === id) {
        strike.completed = !strike.completed;
      }
      return strike;
    })
  }

  onDeleteItem(id: number){
    this.items = this.items.filter( (strike, i) => i !== id);

  }

  onAddItem(){
    this.items.push({
      content: this.inputItem,
      completed: false
    });
    this.inputItem = "";
  }

}

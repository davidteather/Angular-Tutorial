import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService} from '../../services/todo.service';


// The selector is like the custom HTML tag you will
// end up implementing in your html code to import it somewhere
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService:TodoService) {
    
  }

  // Life Cycle Method Runs Right Away.
  // Used to import services
  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo:Todo) {
    // This is a filter that is only returning the ids of the todos
    // that have NOT been deleted
    this.todos = this.todos.filter(t => t.id !== todo.id);

    // Server Call
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }

}

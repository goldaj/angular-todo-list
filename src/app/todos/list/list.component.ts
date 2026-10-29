import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo';
import { TodosService } from 'src/app/shared/todos.service';
import { SnackService } from 'src/app/shared/snack.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todos: Todo[];
  displayedColumns = ['id', 'userId', 'title', 'completed', 'actions'];
  loading = false;
  constructor(private service: TodosService, private snackService: SnackService) { }

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.loading = true;
    this.service.getAll().subscribe({
      next: result => this.todos = result,
      error: error => {
        this.loading = false;
        console.error('Error retrieving todos', error);
        this.snackService.displayMessage('Impossible de charger les tâches', 'Erreur');
      },
      complete: () => this.loading = false
    });
  }

  todoChanged(changedTodo: Todo) {
    this.service.update(changedTodo).subscribe(() => {
      this.snackService.displayMessage('Todo mis à jour', 'Succès');
    },
      error => {
        this.snackService.displayMessage('Impossible de mettre à jour le todo. Rechargement ...', 'Erreur');
        this.loadTodos();
      });
  }

}

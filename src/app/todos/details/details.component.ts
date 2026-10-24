import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/shared/todo';
import { TodosService } from 'src/app/shared/todos.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  todo: Todo;
  loading = true;
  error = '';

  constructor(private route: ActivatedRoute, private service: TodosService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.error = 'Aucun identifiant de tâche dans l’URL.';
      this.loading = false;
      return;
    }
    this.service.get(id).subscribe({
      next: todo => {
        this.todo = todo;
        this.loading = false;
      },
      error: () => {
        this.error = 'Impossible de charger cette tâche.';
        this.loading = false;
      }
    });
  }
}

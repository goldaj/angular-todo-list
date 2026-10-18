import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SnackService } from 'src/app/shared/snack.service';
import { createTodo, Todo } from 'src/app/shared/todo';
import { TodosService } from 'src/app/shared/todos.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  modelDrivenForm: FormGroup;
  id: string;
  isEdit = false;
  todo: Todo;
  @ViewChild('f', { static: false }) modelDrivenNgForm;
  @ViewChild('templateDrivenForm', { static: false }) templateDrivenForm;

  constructor(private service: TodosService,
    activatedRoute: ActivatedRoute, private snackService: SnackService) {
    this.createForm(createTodo());
    console.log(activatedRoute);
    activatedRoute.url.subscribe({
      next: url => {
        if (url.find(s => s.path === 'edit')) {
          this.isEdit = true;
          this.loadTodo(activatedRoute);
        }
      },
      error: error => console.error('URL NOK', error)
    });
  }

  private loadTodo(activatedRoute: ActivatedRoute): void {
    activatedRoute.paramMap.subscribe({
      next: params => {
        this.getTodo(params.get('id'));
      },
      error: error => this.displayError('Params NOK', error)
    });
  }

  private getTodo(id: string) {
    this.service.get(id).subscribe({
      next: todo => this.createForm(todo),
      error: error => this.displayError('Load NOK', error)
    });
  }

  private createForm(todo: Todo) {
    this.modelDrivenForm = new FormGroup({
      title: new FormControl(todo.title, [Validators.required, Validators.minLength(4)]),
      completed: new FormControl(todo.completed),
      userId: new FormControl(todo.userId),
      id: new FormControl(todo.id)
    });

    this.todo = todo;
  }

  submitReactive() {
    this.sendTodo(this.modelDrivenForm.value);
  }

  submit() {
    this.sendTodo(this.todo);
  }

  displaySuccess(message: string, param?: any) {
    console.log(message, param);
    this.snackService.displayMessage(message);
  }

  displayError(message: string, param?: any) {
    console.error(message, param);
    this.snackService.displayMessage(message);
  }

  sendTodo(newTodo: Todo) {
    if (this.isEdit) {
      this.service.update(newTodo).subscribe({
        next: todo => {
          this.displaySuccess('Update OK', todo);
        },
        error: error => this.displayError('Update NOK', error)
      });
    } else {
      this.service.create(newTodo).subscribe({
        next: todo => {
          this.displaySuccess('Add OK', todo);
          this.resetForm();
        },
        error: error => this.displayError('Add NOK', error)
      });
    }
  }

  resetForm() {
    this.modelDrivenNgForm.resetForm();
    this.createForm(createTodo());
  }

  get titleControl() {
    return this.modelDrivenForm.get('title');
  }

  ngOnInit() {
  }
}


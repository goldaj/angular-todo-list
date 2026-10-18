import { TestBed, async, getTestBed } from '@angular/core/testing';

import { TodosService } from './todos.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Todo } from './todo';

describe('TodosService', () => {

  const baseUrl = 'http://jsonplaceholder.typicode.com/todos';
  let httpMock: HttpTestingController;
  let injector: TestBed;
  let service: TodosService;

  beforeEach(async(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  })));

  beforeEach(() => {
    injector = getTestBed();
    service = injector.get(TodosService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => httpMock.verify);

  it('should be created', () => {
    service = TestBed.get(TodosService);
    expect(service).toBeTruthy();
  });

  describe('#createToto', () => {
    it('should call HttpPost', () => {
      const newTodo: Todo = {userId: 3, id: null, title: 'testTodo', completed: true};
      service.create(newTodo).subscribe(createdTodo => {
        console.log('Call returned');
      });

      const req = httpMock.expectOne(baseUrl);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(newTodo);
    });
  });

  describe('#updateTodo', () => {
    it('should call HttpPut', () => {
      const newTodo: Todo = {userId: 3, id: 4, title: 'testTodo', completed: true};
      service.update(newTodo).subscribe(createdTodo => {
        console.log('Call returned');
      });

      const req = httpMock.expectOne(`${baseUrl}/${newTodo.id}`);
      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toEqual(newTodo);
    });
  });
});

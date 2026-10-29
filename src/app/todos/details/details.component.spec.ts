import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';

import { DetailsComponent } from './details.component';
import { TodosService } from 'src/app/shared/todos.service';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let service: jasmine.SpyObj<TodosService>;

  beforeEach(async(() => {
    service = jasmine.createSpyObj('TodosService', ['get']);
    service.get.and.returnValue(of({ id: 42, userId: 3, title: 'Tâche retrouvée', completed: true }));
    TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: TodosService, useValue: service },
        { provide: ActivatedRoute, useValue: {
          snapshot: { paramMap: convertToParamMap({ id: '42' }) }
        } }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
  });

  it('loads the selected task and displays its real status', () => {
    fixture.detectChanges();
    expect(service.get).toHaveBeenCalledWith('42');
    expect(component.loading).toBe(false);
    expect(component.todo.id).toBe(42);
    expect(fixture.nativeElement.textContent).toContain('Tâche retrouvée');
    expect(fixture.nativeElement.textContent).toContain('Terminée');
  });

  it('displays an error instead of an endless loading state', () => {
    service.get.and.returnValue(throwError(new Error('offline')));
    fixture.detectChanges();
    expect(component.loading).toBe(false);
    expect(component.error).toContain('Impossible');
    expect(fixture.nativeElement.textContent).toContain('Impossible');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoadminComponent } from './todoadmin.component';

describe('TodoadminComponent', () => {
  let component: TodoadminComponent;
  let fixture: ComponentFixture<TodoadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

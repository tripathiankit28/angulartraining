import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomepgComponent } from './welcomepg.component';

describe('WelcomepgComponent', () => {
  let component: WelcomepgComponent;
  let fixture: ComponentFixture<WelcomepgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomepgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomepgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

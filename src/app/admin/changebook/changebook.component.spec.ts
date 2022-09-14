import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangebookComponent } from './changebook.component';

describe('ChangebookComponent', () => {
  let component: ChangebookComponent;
  let fixture: ComponentFixture<ChangebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangebookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

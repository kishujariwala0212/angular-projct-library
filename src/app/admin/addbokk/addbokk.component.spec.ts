import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbokkComponent } from './addbokk.component';

describe('AddbokkComponent', () => {
  let component: AddbokkComponent;
  let fixture: ComponentFixture<AddbokkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbokkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbokkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

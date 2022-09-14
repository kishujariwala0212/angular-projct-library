import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersqueryComponent } from './usersquery.component';

describe('UsersqueryComponent', () => {
  let component: UsersqueryComponent;
  let fixture: ComponentFixture<UsersqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersqueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

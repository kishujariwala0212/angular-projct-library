import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdataComponent } from './orderdata.component';

describe('OrderdataComponent', () => {
  let component: OrderdataComponent;
  let fixture: ComponentFixture<OrderdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

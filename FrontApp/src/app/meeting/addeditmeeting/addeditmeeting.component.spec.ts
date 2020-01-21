import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditmeetingComponent } from './addeditmeeting.component';

describe('AddeditmeetingComponent', () => {
  let component: AddeditmeetingComponent;
  let fixture: ComponentFixture<AddeditmeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditmeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditmeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

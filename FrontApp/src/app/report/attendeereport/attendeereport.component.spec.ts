import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeereportComponent } from './attendeereport.component';

describe('AttendeereportComponent', () => {
  let component: AttendeereportComponent;
  let fixture: ComponentFixture<AttendeereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendeereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendeereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

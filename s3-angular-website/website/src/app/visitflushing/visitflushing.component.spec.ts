import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitflushingComponent } from './visitflushing.component';

describe('VisitflushingComponent', () => {
  let component: VisitflushingComponent;
  let fixture: ComponentFixture<VisitflushingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitflushingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitflushingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

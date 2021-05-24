import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoryachtsComponent } from './motoryachts.component';

describe('MotoryachtsComponent', () => {
  let component: MotoryachtsComponent;
  let fixture: ComponentFixture<MotoryachtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoryachtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoryachtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

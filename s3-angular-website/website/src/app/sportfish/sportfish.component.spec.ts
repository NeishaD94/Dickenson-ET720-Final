import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportfishComponent } from './sportfish.component';

describe('SportfishComponent', () => {
  let component: SportfishComponent;
  let fixture: ComponentFixture<SportfishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportfishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportfishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

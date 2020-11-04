import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedproductDetailsComponent } from './selectedproduct-details.component';

describe('SelectedproductDetailsComponent', () => {
  let component: SelectedproductDetailsComponent;
  let fixture: ComponentFixture<SelectedproductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedproductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedproductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

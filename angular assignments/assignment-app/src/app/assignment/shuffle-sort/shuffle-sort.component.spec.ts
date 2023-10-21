import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuffleSortComponent } from './shuffle-sort.component';

describe('ShuffleSortComponent', () => {
  let component: ShuffleSortComponent;
  let fixture: ComponentFixture<ShuffleSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShuffleSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuffleSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

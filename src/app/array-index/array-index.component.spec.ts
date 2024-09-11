import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayIndexComponent } from './array-index.component';

describe('ArrayIndexComponent', () => {
  let component: ArrayIndexComponent;
  let fixture: ComponentFixture<ArrayIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

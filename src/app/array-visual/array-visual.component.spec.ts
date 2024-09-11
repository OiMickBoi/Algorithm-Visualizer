import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayVisualComponent } from './array-visual.component';

describe('ArrayVisualComponent', () => {
  let component: ArrayVisualComponent;
  let fixture: ComponentFixture<ArrayVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayVisualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

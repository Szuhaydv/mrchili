import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelowFoldComponent } from './below-fold.component';

describe('BelowFoldComponent', () => {
  let component: BelowFoldComponent;
  let fixture: ComponentFixture<BelowFoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BelowFoldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BelowFoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

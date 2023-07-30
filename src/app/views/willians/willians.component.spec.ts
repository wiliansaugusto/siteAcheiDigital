import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilliansComponent } from './willians.component';

describe('WilliansComponent', () => {
  let component: WilliansComponent;
  let fixture: ComponentFixture<WilliansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WilliansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WilliansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

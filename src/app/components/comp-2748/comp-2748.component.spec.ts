import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2748Component } from './comp-2748.component';

describe('Comp2748Component', () => {
  let component: Comp2748Component;
  let fixture: ComponentFixture<Comp2748Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2748Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

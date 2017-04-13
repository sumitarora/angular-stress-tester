import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2406Component } from './comp-2406.component';

describe('Comp2406Component', () => {
  let component: Comp2406Component;
  let fixture: ComponentFixture<Comp2406Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2406Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

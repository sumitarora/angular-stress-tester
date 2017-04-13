import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2701Component } from './comp-2701.component';

describe('Comp2701Component', () => {
  let component: Comp2701Component;
  let fixture: ComponentFixture<Comp2701Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2701Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

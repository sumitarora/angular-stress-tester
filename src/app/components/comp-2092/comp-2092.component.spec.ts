import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2092Component } from './comp-2092.component';

describe('Comp2092Component', () => {
  let component: Comp2092Component;
  let fixture: ComponentFixture<Comp2092Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2092Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2092Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

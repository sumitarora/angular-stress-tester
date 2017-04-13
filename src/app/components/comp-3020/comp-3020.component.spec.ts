import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3020Component } from './comp-3020.component';

describe('Comp3020Component', () => {
  let component: Comp3020Component;
  let fixture: ComponentFixture<Comp3020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

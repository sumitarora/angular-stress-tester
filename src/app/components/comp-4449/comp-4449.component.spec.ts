import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4449Component } from './comp-4449.component';

describe('Comp4449Component', () => {
  let component: Comp4449Component;
  let fixture: ComponentFixture<Comp4449Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4449Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

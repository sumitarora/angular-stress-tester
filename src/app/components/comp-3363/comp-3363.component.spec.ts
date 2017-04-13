import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3363Component } from './comp-3363.component';

describe('Comp3363Component', () => {
  let component: Comp3363Component;
  let fixture: ComponentFixture<Comp3363Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3363Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

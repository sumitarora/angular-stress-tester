import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3979Component } from './comp-3979.component';

describe('Comp3979Component', () => {
  let component: Comp3979Component;
  let fixture: ComponentFixture<Comp3979Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3979Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

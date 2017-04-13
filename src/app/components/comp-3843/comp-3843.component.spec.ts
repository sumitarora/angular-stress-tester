import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3843Component } from './comp-3843.component';

describe('Comp3843Component', () => {
  let component: Comp3843Component;
  let fixture: ComponentFixture<Comp3843Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3843Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

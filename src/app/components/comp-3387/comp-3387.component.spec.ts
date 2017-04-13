import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3387Component } from './comp-3387.component';

describe('Comp3387Component', () => {
  let component: Comp3387Component;
  let fixture: ComponentFixture<Comp3387Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3387Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

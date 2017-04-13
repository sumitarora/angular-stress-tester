import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3064Component } from './comp-3064.component';

describe('Comp3064Component', () => {
  let component: Comp3064Component;
  let fixture: ComponentFixture<Comp3064Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3064Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3064Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

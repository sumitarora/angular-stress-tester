import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3249Component } from './comp-3249.component';

describe('Comp3249Component', () => {
  let component: Comp3249Component;
  let fixture: ComponentFixture<Comp3249Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3249Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3037Component } from './comp-3037.component';

describe('Comp3037Component', () => {
  let component: Comp3037Component;
  let fixture: ComponentFixture<Comp3037Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3037Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3037Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

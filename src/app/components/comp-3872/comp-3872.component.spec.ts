import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3872Component } from './comp-3872.component';

describe('Comp3872Component', () => {
  let component: Comp3872Component;
  let fixture: ComponentFixture<Comp3872Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3872Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3872Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

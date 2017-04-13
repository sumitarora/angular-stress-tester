import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2079Component } from './comp-2079.component';

describe('Comp2079Component', () => {
  let component: Comp2079Component;
  let fixture: ComponentFixture<Comp2079Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2079Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2079Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

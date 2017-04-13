import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4985Component } from './comp-4985.component';

describe('Comp4985Component', () => {
  let component: Comp4985Component;
  let fixture: ComponentFixture<Comp4985Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4985Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

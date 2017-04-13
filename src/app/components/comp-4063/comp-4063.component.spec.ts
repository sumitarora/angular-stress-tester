import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4063Component } from './comp-4063.component';

describe('Comp4063Component', () => {
  let component: Comp4063Component;
  let fixture: ComponentFixture<Comp4063Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4063Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4063Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

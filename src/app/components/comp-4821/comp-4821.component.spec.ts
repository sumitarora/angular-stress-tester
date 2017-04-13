import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4821Component } from './comp-4821.component';

describe('Comp4821Component', () => {
  let component: Comp4821Component;
  let fixture: ComponentFixture<Comp4821Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4821Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

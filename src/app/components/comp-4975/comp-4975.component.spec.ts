import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4975Component } from './comp-4975.component';

describe('Comp4975Component', () => {
  let component: Comp4975Component;
  let fixture: ComponentFixture<Comp4975Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4975Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4982Component } from './comp-4982.component';

describe('Comp4982Component', () => {
  let component: Comp4982Component;
  let fixture: ComponentFixture<Comp4982Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4982Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4982Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

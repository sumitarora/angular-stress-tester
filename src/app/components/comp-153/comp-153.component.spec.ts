import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp153Component } from './comp-153.component';

describe('Comp153Component', () => {
  let component: Comp153Component;
  let fixture: ComponentFixture<Comp153Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp153Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

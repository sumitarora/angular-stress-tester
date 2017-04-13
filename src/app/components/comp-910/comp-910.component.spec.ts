import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp910Component } from './comp-910.component';

describe('Comp910Component', () => {
  let component: Comp910Component;
  let fixture: ComponentFixture<Comp910Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp910Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp910Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

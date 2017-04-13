import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp850Component } from './comp-850.component';

describe('Comp850Component', () => {
  let component: Comp850Component;
  let fixture: ComponentFixture<Comp850Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp850Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

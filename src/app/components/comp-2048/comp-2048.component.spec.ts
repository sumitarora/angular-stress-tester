import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2048Component } from './comp-2048.component';

describe('Comp2048Component', () => {
  let component: Comp2048Component;
  let fixture: ComponentFixture<Comp2048Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2048Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2048Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2922Component } from './comp-2922.component';

describe('Comp2922Component', () => {
  let component: Comp2922Component;
  let fixture: ComponentFixture<Comp2922Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2922Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

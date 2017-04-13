import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2862Component } from './comp-2862.component';

describe('Comp2862Component', () => {
  let component: Comp2862Component;
  let fixture: ComponentFixture<Comp2862Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2862Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4395Component } from './comp-4395.component';

describe('Comp4395Component', () => {
  let component: Comp4395Component;
  let fixture: ComponentFixture<Comp4395Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4395Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2375Component } from './comp-2375.component';

describe('Comp2375Component', () => {
  let component: Comp2375Component;
  let fixture: ComponentFixture<Comp2375Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2375Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

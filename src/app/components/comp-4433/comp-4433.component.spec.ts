import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4433Component } from './comp-4433.component';

describe('Comp4433Component', () => {
  let component: Comp4433Component;
  let fixture: ComponentFixture<Comp4433Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4433Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

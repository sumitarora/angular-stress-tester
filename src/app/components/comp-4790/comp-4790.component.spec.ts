import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4790Component } from './comp-4790.component';

describe('Comp4790Component', () => {
  let component: Comp4790Component;
  let fixture: ComponentFixture<Comp4790Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4790Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4790Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

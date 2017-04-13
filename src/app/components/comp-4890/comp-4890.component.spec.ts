import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4890Component } from './comp-4890.component';

describe('Comp4890Component', () => {
  let component: Comp4890Component;
  let fixture: ComponentFixture<Comp4890Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4890Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

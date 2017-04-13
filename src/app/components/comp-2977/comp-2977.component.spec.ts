import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2977Component } from './comp-2977.component';

describe('Comp2977Component', () => {
  let component: Comp2977Component;
  let fixture: ComponentFixture<Comp2977Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2977Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2977Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

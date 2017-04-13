import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4660Component } from './comp-4660.component';

describe('Comp4660Component', () => {
  let component: Comp4660Component;
  let fixture: ComponentFixture<Comp4660Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4660Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4660Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

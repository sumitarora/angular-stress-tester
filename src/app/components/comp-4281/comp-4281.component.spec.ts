import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4281Component } from './comp-4281.component';

describe('Comp4281Component', () => {
  let component: Comp4281Component;
  let fixture: ComponentFixture<Comp4281Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4281Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

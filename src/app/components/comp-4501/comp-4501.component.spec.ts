import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4501Component } from './comp-4501.component';

describe('Comp4501Component', () => {
  let component: Comp4501Component;
  let fixture: ComponentFixture<Comp4501Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4501Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4033Component } from './comp-4033.component';

describe('Comp4033Component', () => {
  let component: Comp4033Component;
  let fixture: ComponentFixture<Comp4033Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4033Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4033Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

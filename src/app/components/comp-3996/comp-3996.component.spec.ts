import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3996Component } from './comp-3996.component';

describe('Comp3996Component', () => {
  let component: Comp3996Component;
  let fixture: ComponentFixture<Comp3996Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3996Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

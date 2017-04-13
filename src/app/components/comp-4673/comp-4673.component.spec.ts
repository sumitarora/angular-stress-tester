import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4673Component } from './comp-4673.component';

describe('Comp4673Component', () => {
  let component: Comp4673Component;
  let fixture: ComponentFixture<Comp4673Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4673Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4673Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

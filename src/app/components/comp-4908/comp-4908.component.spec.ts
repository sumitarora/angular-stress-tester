import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4908Component } from './comp-4908.component';

describe('Comp4908Component', () => {
  let component: Comp4908Component;
  let fixture: ComponentFixture<Comp4908Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4908Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3557Component } from './comp-3557.component';

describe('Comp3557Component', () => {
  let component: Comp3557Component;
  let fixture: ComponentFixture<Comp3557Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3557Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp334Component } from './comp-334.component';

describe('Comp334Component', () => {
  let component: Comp334Component;
  let fixture: ComponentFixture<Comp334Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp334Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

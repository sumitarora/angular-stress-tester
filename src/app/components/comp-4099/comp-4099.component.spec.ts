import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4099Component } from './comp-4099.component';

describe('Comp4099Component', () => {
  let component: Comp4099Component;
  let fixture: ComponentFixture<Comp4099Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4099Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4099Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

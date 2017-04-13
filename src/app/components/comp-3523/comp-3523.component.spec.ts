import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3523Component } from './comp-3523.component';

describe('Comp3523Component', () => {
  let component: Comp3523Component;
  let fixture: ComponentFixture<Comp3523Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3523Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

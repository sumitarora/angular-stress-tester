import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3771Component } from './comp-3771.component';

describe('Comp3771Component', () => {
  let component: Comp3771Component;
  let fixture: ComponentFixture<Comp3771Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3771Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

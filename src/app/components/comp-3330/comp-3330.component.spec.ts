import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3330Component } from './comp-3330.component';

describe('Comp3330Component', () => {
  let component: Comp3330Component;
  let fixture: ComponentFixture<Comp3330Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3330Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

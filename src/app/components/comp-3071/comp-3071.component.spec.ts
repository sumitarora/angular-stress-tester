import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3071Component } from './comp-3071.component';

describe('Comp3071Component', () => {
  let component: Comp3071Component;
  let fixture: ComponentFixture<Comp3071Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3071Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3071Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

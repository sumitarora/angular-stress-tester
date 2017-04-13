import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3683Component } from './comp-3683.component';

describe('Comp3683Component', () => {
  let component: Comp3683Component;
  let fixture: ComponentFixture<Comp3683Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3683Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

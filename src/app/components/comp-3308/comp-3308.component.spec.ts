import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3308Component } from './comp-3308.component';

describe('Comp3308Component', () => {
  let component: Comp3308Component;
  let fixture: ComponentFixture<Comp3308Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3308Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

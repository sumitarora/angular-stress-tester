import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2308Component } from './comp-2308.component';

describe('Comp2308Component', () => {
  let component: Comp2308Component;
  let fixture: ComponentFixture<Comp2308Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2308Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

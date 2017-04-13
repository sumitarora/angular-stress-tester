import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4308Component } from './comp-4308.component';

describe('Comp4308Component', () => {
  let component: Comp4308Component;
  let fixture: ComponentFixture<Comp4308Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4308Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

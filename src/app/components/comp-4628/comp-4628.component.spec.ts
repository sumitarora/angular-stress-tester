import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4628Component } from './comp-4628.component';

describe('Comp4628Component', () => {
  let component: Comp4628Component;
  let fixture: ComponentFixture<Comp4628Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4628Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2664Component } from './comp-2664.component';

describe('Comp2664Component', () => {
  let component: Comp2664Component;
  let fixture: ComponentFixture<Comp2664Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2664Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2664Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

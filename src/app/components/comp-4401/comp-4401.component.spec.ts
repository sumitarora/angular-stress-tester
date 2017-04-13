import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4401Component } from './comp-4401.component';

describe('Comp4401Component', () => {
  let component: Comp4401Component;
  let fixture: ComponentFixture<Comp4401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

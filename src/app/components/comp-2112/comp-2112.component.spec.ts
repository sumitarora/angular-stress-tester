import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2112Component } from './comp-2112.component';

describe('Comp2112Component', () => {
  let component: Comp2112Component;
  let fixture: ComponentFixture<Comp2112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

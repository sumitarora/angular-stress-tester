import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4436Component } from './comp-4436.component';

describe('Comp4436Component', () => {
  let component: Comp4436Component;
  let fixture: ComponentFixture<Comp4436Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4436Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

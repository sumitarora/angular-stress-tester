import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3006Component } from './comp-3006.component';

describe('Comp3006Component', () => {
  let component: Comp3006Component;
  let fixture: ComponentFixture<Comp3006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

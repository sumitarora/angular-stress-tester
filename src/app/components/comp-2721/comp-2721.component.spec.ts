import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2721Component } from './comp-2721.component';

describe('Comp2721Component', () => {
  let component: Comp2721Component;
  let fixture: ComponentFixture<Comp2721Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2721Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2432Component } from './comp-2432.component';

describe('Comp2432Component', () => {
  let component: Comp2432Component;
  let fixture: ComponentFixture<Comp2432Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2432Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

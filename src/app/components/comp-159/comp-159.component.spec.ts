import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp159Component } from './comp-159.component';

describe('Comp159Component', () => {
  let component: Comp159Component;
  let fixture: ComponentFixture<Comp159Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp159Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

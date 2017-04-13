import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2361Component } from './comp-2361.component';

describe('Comp2361Component', () => {
  let component: Comp2361Component;
  let fixture: ComponentFixture<Comp2361Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2361Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

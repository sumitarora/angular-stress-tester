import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3685Component } from './comp-3685.component';

describe('Comp3685Component', () => {
  let component: Comp3685Component;
  let fixture: ComponentFixture<Comp3685Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3685Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4342Component } from './comp-4342.component';

describe('Comp4342Component', () => {
  let component: Comp4342Component;
  let fixture: ComponentFixture<Comp4342Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4342Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

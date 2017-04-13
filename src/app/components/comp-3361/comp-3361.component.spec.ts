import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3361Component } from './comp-3361.component';

describe('Comp3361Component', () => {
  let component: Comp3361Component;
  let fixture: ComponentFixture<Comp3361Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3361Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

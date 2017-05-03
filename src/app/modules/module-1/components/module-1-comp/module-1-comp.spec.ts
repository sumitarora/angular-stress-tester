import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1CompComponent } from './module-1-comp.component';

describe('Comp1Component', () => {
  let component: Module1CompComponent;
  let fixture: ComponentFixture<Module1CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module1CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module1CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

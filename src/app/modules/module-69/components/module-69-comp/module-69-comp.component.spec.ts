import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module69CompComponent } from './module-69-comp.component';

describe('Module69CompComponent', () => {
  let component: Module69CompComponent;
  let fixture: ComponentFixture<Module69CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module69CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module69CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module73CompComponent } from './module-73-comp.component';

describe('Module73CompComponent', () => {
  let component: Module73CompComponent;
  let fixture: ComponentFixture<Module73CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module73CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module73CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

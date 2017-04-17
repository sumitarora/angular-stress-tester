import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module31CompComponent } from './module-31-comp.component';

describe('Module31CompComponent', () => {
  let component: Module31CompComponent;
  let fixture: ComponentFixture<Module31CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module31CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module31CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

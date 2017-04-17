import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module34CompComponent } from './module-34-comp.component';

describe('Module34CompComponent', () => {
  let component: Module34CompComponent;
  let fixture: ComponentFixture<Module34CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module34CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module34CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

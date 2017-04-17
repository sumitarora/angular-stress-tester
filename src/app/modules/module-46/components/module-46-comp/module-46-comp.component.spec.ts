import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module46CompComponent } from './module-46-comp.component';

describe('Module46CompComponent', () => {
  let component: Module46CompComponent;
  let fixture: ComponentFixture<Module46CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module46CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module46CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

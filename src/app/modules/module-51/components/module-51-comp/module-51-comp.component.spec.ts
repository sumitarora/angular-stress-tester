import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module51CompComponent } from './module-51-comp.component';

describe('Module51CompComponent', () => {
  let component: Module51CompComponent;
  let fixture: ComponentFixture<Module51CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module51CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module51CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

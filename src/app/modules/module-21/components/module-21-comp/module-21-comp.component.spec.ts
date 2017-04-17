import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module21CompComponent } from './module-21-comp.component';

describe('Module21CompComponent', () => {
  let component: Module21CompComponent;
  let fixture: ComponentFixture<Module21CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module21CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module21CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module47CompComponent } from './module-47-comp.component';

describe('Module47CompComponent', () => {
  let component: Module47CompComponent;
  let fixture: ComponentFixture<Module47CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module47CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module47CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

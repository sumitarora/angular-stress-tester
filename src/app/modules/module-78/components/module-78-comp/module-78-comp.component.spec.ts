import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module78CompComponent } from './module-78-comp.component';

describe('Module78CompComponent', () => {
  let component: Module78CompComponent;
  let fixture: ComponentFixture<Module78CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module78CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module78CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

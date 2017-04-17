import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module86CompComponent } from './module-86-comp.component';

describe('Module86CompComponent', () => {
  let component: Module86CompComponent;
  let fixture: ComponentFixture<Module86CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module86CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module86CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

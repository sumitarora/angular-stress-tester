import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module53CompComponent } from './module-53-comp.component';

describe('Module53CompComponent', () => {
  let component: Module53CompComponent;
  let fixture: ComponentFixture<Module53CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module53CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module53CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

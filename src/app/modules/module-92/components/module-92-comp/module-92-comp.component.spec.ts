import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module92CompComponent } from './module-92-comp.component';

describe('Module92CompComponent', () => {
  let component: Module92CompComponent;
  let fixture: ComponentFixture<Module92CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module92CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module92CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

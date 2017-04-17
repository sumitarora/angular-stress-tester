import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module55CompComponent } from './module-55-comp.component';

describe('Module55CompComponent', () => {
  let component: Module55CompComponent;
  let fixture: ComponentFixture<Module55CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module55CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module55CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

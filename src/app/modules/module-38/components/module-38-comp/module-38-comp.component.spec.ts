import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module38CompComponent } from './module-38-comp.component';

describe('Module38CompComponent', () => {
  let component: Module38CompComponent;
  let fixture: ComponentFixture<Module38CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module38CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module38CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

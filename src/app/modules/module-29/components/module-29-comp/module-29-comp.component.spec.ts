import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module29CompComponent } from './module-29-comp.component';

describe('Module29CompComponent', () => {
  let component: Module29CompComponent;
  let fixture: ComponentFixture<Module29CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module29CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module29CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

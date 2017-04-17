import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module4CompComponent } from './module-4-comp.component';

describe('Module4CompComponent', () => {
  let component: Module4CompComponent;
  let fixture: ComponentFixture<Module4CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module4CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module4CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

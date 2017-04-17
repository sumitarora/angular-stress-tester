import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module64CompComponent } from './module-64-comp.component';

describe('Module64CompComponent', () => {
  let component: Module64CompComponent;
  let fixture: ComponentFixture<Module64CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module64CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module64CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

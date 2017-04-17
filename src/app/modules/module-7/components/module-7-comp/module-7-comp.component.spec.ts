import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module7CompComponent } from './module-7-comp.component';

describe('Module7CompComponent', () => {
  let component: Module7CompComponent;
  let fixture: ComponentFixture<Module7CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module7CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module7CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

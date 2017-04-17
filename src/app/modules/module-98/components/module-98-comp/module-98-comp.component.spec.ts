import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module98CompComponent } from './module-98-comp.component';

describe('Module98CompComponent', () => {
  let component: Module98CompComponent;
  let fixture: ComponentFixture<Module98CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module98CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module98CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

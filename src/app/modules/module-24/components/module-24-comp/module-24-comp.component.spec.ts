import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module24CompComponent } from './module-24-comp.component';

describe('Module24CompComponent', () => {
  let component: Module24CompComponent;
  let fixture: ComponentFixture<Module24CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module24CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module24CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module65CompComponent } from './module-65-comp.component';

describe('Module65CompComponent', () => {
  let component: Module65CompComponent;
  let fixture: ComponentFixture<Module65CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module65CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module65CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

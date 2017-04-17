import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module35CompComponent } from './module-35-comp.component';

describe('Module35CompComponent', () => {
  let component: Module35CompComponent;
  let fixture: ComponentFixture<Module35CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module35CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module35CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

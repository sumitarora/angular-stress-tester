import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module70CompComponent } from './module-70-comp.component';

describe('Module70CompComponent', () => {
  let component: Module70CompComponent;
  let fixture: ComponentFixture<Module70CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module70CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module70CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

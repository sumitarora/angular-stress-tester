import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module97CompComponent } from './module-97-comp.component';

describe('Module97CompComponent', () => {
  let component: Module97CompComponent;
  let fixture: ComponentFixture<Module97CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module97CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module97CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

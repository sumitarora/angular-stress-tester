import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module96CompComponent } from './module-96-comp.component';

describe('Module96CompComponent', () => {
  let component: Module96CompComponent;
  let fixture: ComponentFixture<Module96CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module96CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module96CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

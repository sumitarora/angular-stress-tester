import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module25CompComponent } from './module-25-comp.component';

describe('Module25CompComponent', () => {
  let component: Module25CompComponent;
  let fixture: ComponentFixture<Module25CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module25CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module25CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module40CompComponent } from './module-40-comp.component';

describe('Module40CompComponent', () => {
  let component: Module40CompComponent;
  let fixture: ComponentFixture<Module40CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module40CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module40CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

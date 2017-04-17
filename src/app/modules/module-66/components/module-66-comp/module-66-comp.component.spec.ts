import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module66CompComponent } from './module-66-comp.component';

describe('Module66CompComponent', () => {
  let component: Module66CompComponent;
  let fixture: ComponentFixture<Module66CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module66CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module66CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

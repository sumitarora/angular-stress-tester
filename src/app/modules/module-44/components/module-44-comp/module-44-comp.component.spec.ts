import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module44CompComponent } from './module-44-comp.component';

describe('Module44CompComponent', () => {
  let component: Module44CompComponent;
  let fixture: ComponentFixture<Module44CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module44CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module44CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

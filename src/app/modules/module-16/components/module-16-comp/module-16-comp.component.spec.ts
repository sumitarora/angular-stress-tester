import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module16CompComponent } from './module-16-comp.component';

describe('Module16CompComponent', () => {
  let component: Module16CompComponent;
  let fixture: ComponentFixture<Module16CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module16CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module16CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module72CompComponent } from './module-72-comp.component';

describe('Module72CompComponent', () => {
  let component: Module72CompComponent;
  let fixture: ComponentFixture<Module72CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module72CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module72CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module28CompComponent } from './module-28-comp.component';

describe('Module28CompComponent', () => {
  let component: Module28CompComponent;
  let fixture: ComponentFixture<Module28CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module28CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module28CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

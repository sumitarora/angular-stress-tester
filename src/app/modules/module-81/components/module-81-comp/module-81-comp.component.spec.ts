import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module81CompComponent } from './module-81-comp.component';

describe('Module81CompComponent', () => {
  let component: Module81CompComponent;
  let fixture: ComponentFixture<Module81CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module81CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module81CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

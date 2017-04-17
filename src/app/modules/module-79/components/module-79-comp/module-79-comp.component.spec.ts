import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module79CompComponent } from './module-79-comp.component';

describe('Module79CompComponent', () => {
  let component: Module79CompComponent;
  let fixture: ComponentFixture<Module79CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module79CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module79CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

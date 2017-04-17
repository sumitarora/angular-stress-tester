import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module17CompComponent } from './module-17-comp.component';

describe('Module17CompComponent', () => {
  let component: Module17CompComponent;
  let fixture: ComponentFixture<Module17CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module17CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module17CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module3CompComponent } from './module-3-comp.component';

describe('Module3CompComponent', () => {
  let component: Module3CompComponent;
  let fixture: ComponentFixture<Module3CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module3CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module3CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

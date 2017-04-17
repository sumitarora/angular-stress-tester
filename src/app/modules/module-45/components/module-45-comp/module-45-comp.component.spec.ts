import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module45CompComponent } from './module-45-comp.component';

describe('Module45CompComponent', () => {
  let component: Module45CompComponent;
  let fixture: ComponentFixture<Module45CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module45CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module45CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

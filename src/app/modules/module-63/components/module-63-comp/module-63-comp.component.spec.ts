import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module63CompComponent } from './module-63-comp.component';

describe('Module63CompComponent', () => {
  let component: Module63CompComponent;
  let fixture: ComponentFixture<Module63CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module63CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module63CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module84CompComponent } from './module-84-comp.component';

describe('Module84CompComponent', () => {
  let component: Module84CompComponent;
  let fixture: ComponentFixture<Module84CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module84CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module84CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

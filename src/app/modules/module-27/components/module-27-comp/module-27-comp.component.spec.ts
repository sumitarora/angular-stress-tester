import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module27CompComponent } from './module-27-comp.component';

describe('Module27CompComponent', () => {
  let component: Module27CompComponent;
  let fixture: ComponentFixture<Module27CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module27CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module27CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

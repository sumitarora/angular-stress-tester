import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module68CompComponent } from './module-68-comp.component';

describe('Module68CompComponent', () => {
  let component: Module68CompComponent;
  let fixture: ComponentFixture<Module68CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module68CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module68CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

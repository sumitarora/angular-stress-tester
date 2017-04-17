import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module33CompComponent } from './module-33-comp.component';

describe('Module33CompComponent', () => {
  let component: Module33CompComponent;
  let fixture: ComponentFixture<Module33CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module33CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module33CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

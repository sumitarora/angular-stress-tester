import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module80CompComponent } from './module-80-comp.component';

describe('Module80CompComponent', () => {
  let component: Module80CompComponent;
  let fixture: ComponentFixture<Module80CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module80CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module80CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

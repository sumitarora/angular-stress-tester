import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module58CompComponent } from './module-58-comp.component';

describe('Module58CompComponent', () => {
  let component: Module58CompComponent;
  let fixture: ComponentFixture<Module58CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module58CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module58CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

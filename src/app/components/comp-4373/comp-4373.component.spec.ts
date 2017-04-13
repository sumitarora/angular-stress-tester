import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4373Component } from './comp-4373.component';

describe('Comp4373Component', () => {
  let component: Comp4373Component;
  let fixture: ComponentFixture<Comp4373Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4373Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

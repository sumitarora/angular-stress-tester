import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp81Component } from './comp-81.component';
import { Service81Service } from '../../services/service-81.service';

describe('Comp81Component', () => {
  let component: Comp81Component;
  let fixture: ComponentFixture<Comp81Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp81Component ],
providers: [Service81Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

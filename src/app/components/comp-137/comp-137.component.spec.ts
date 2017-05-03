import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp137Component } from './comp-137.component';
import { Service137Service } from '../../services/service-137.service';

describe('Comp137Component', () => {
  let component: Comp137Component;
  let fixture: ComponentFixture<Comp137Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp137Component ],
providers: [Service137Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

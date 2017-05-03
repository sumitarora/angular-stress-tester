import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp558Component } from './comp-558.component';
import { Service558Service } from '../../services/service-558.service';

describe('Comp558Component', () => {
  let component: Comp558Component;
  let fixture: ComponentFixture<Comp558Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp558Component ],
providers: [Service558Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

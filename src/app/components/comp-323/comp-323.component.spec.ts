import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp323Component } from './comp-323.component';
import { Service323Service } from '../../services/service-323.service';

describe('Comp323Component', () => {
  let component: Comp323Component;
  let fixture: ComponentFixture<Comp323Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp323Component ],
providers: [Service323Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

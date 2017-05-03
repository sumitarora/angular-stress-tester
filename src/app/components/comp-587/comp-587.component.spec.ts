import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp587Component } from './comp-587.component';
import { Service587Service } from '../../services/service-587.service';

describe('Comp587Component', () => {
  let component: Comp587Component;
  let fixture: ComponentFixture<Comp587Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp587Component ],
providers: [Service587Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp552Component } from './comp-552.component';
import { Service552Service } from '../../services/service-552.service';

describe('Comp552Component', () => {
  let component: Comp552Component;
  let fixture: ComponentFixture<Comp552Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp552Component ],
providers: [Service552Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

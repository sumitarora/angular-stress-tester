import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp840Component } from './comp-840.component';
import { Service840Service } from '../../services/service-840.service';

describe('Comp840Component', () => {
  let component: Comp840Component;
  let fixture: ComponentFixture<Comp840Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp840Component ],
providers: [Service840Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp840Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp957Component } from './comp-957.component';
import { Service957Service } from '../../services/service-957.service';

describe('Comp957Component', () => {
  let component: Comp957Component;
  let fixture: ComponentFixture<Comp957Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp957Component ],
providers: [Service957Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp315Component } from './comp-315.component';
import { Service315Service } from '../../services/service-315.service';

describe('Comp315Component', () => {
  let component: Comp315Component;
  let fixture: ComponentFixture<Comp315Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp315Component ],
providers: [Service315Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

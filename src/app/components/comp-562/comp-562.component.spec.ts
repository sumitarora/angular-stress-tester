import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp562Component } from './comp-562.component';
import { Service562Service } from '../../services/service-562.service';

describe('Comp562Component', () => {
  let component: Comp562Component;
  let fixture: ComponentFixture<Comp562Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp562Component ],
providers: [Service562Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

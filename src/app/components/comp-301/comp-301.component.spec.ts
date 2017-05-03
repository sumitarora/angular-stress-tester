import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp301Component } from './comp-301.component';
import { Service301Service } from '../../services/service-301.service';

describe('Comp301Component', () => {
  let component: Comp301Component;
  let fixture: ComponentFixture<Comp301Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp301Component ],
providers: [Service301Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

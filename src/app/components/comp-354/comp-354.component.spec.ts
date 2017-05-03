import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp354Component } from './comp-354.component';
import { Service354Service } from '../../services/service-354.service';

describe('Comp354Component', () => {
  let component: Comp354Component;
  let fixture: ComponentFixture<Comp354Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp354Component ],
providers: [Service354Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

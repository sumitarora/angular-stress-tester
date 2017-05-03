import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp760Component } from './comp-760.component';
import { Service760Service } from '../../services/service-760.service';

describe('Comp760Component', () => {
  let component: Comp760Component;
  let fixture: ComponentFixture<Comp760Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp760Component ],
providers: [Service760Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

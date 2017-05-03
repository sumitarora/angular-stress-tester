import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp658Component } from './comp-658.component';
import { Service658Service } from '../../services/service-658.service';

describe('Comp658Component', () => {
  let component: Comp658Component;
  let fixture: ComponentFixture<Comp658Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp658Component ],
providers: [Service658Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp658Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

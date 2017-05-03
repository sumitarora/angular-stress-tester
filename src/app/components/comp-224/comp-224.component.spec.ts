import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp224Component } from './comp-224.component';
import { Service224Service } from '../../services/service-224.service';

describe('Comp224Component', () => {
  let component: Comp224Component;
  let fixture: ComponentFixture<Comp224Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp224Component ],
providers: [Service224Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

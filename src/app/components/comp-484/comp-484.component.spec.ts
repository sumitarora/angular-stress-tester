import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp484Component } from './comp-484.component';
import { Service484Service } from '../../services/service-484.service';

describe('Comp484Component', () => {
  let component: Comp484Component;
  let fixture: ComponentFixture<Comp484Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp484Component ],
providers: [Service484Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

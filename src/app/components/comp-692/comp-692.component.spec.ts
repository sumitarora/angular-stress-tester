import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp692Component } from './comp-692.component';
import { Service692Service } from '../../services/service-692.service';

describe('Comp692Component', () => {
  let component: Comp692Component;
  let fixture: ComponentFixture<Comp692Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp692Component ],
providers: [Service692Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

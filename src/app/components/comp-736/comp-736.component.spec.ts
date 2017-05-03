import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp736Component } from './comp-736.component';
import { Service736Service } from '../../services/service-736.service';

describe('Comp736Component', () => {
  let component: Comp736Component;
  let fixture: ComponentFixture<Comp736Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp736Component ],
providers: [Service736Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp736Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

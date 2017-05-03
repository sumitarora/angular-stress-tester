import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp327Component } from './comp-327.component';
import { Service327Service } from '../../services/service-327.service';

describe('Comp327Component', () => {
  let component: Comp327Component;
  let fixture: ComponentFixture<Comp327Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp327Component ],
providers: [Service327Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

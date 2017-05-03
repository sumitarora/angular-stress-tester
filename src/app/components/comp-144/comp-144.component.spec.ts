import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp144Component } from './comp-144.component';
import { Service144Service } from '../../services/service-144.service';

describe('Comp144Component', () => {
  let component: Comp144Component;
  let fixture: ComponentFixture<Comp144Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp144Component ],
providers: [Service144Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

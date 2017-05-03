import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp730Component } from './comp-730.component';
import { Service730Service } from '../../services/service-730.service';

describe('Comp730Component', () => {
  let component: Comp730Component;
  let fixture: ComponentFixture<Comp730Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp730Component ],
providers: [Service730Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp730Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

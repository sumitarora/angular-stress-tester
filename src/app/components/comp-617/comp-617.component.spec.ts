import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp617Component } from './comp-617.component';
import { Service617Service } from '../../services/service-617.service';

describe('Comp617Component', () => {
  let component: Comp617Component;
  let fixture: ComponentFixture<Comp617Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp617Component ],
providers: [Service617Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

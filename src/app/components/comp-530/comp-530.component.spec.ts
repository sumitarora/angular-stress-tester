import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp530Component } from './comp-530.component';
import { Service530Service } from '../../services/service-530.service';

describe('Comp530Component', () => {
  let component: Comp530Component;
  let fixture: ComponentFixture<Comp530Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp530Component ],
providers: [Service530Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

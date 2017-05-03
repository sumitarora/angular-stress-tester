import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp302Component } from './comp-302.component';
import { Service302Service } from '../../services/service-302.service';

describe('Comp302Component', () => {
  let component: Comp302Component;
  let fixture: ComponentFixture<Comp302Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp302Component ],
providers: [Service302Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

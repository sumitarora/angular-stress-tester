import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp294Component } from './comp-294.component';
import { Service294Service } from '../../services/service-294.service';

describe('Comp294Component', () => {
  let component: Comp294Component;
  let fixture: ComponentFixture<Comp294Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp294Component ],
providers: [Service294Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

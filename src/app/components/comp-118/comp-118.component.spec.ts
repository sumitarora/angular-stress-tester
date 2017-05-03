import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp118Component } from './comp-118.component';
import { Service118Service } from '../../services/service-118.service';

describe('Comp118Component', () => {
  let component: Comp118Component;
  let fixture: ComponentFixture<Comp118Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp118Component ],
providers: [Service118Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

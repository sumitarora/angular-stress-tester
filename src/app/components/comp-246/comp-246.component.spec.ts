import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp246Component } from './comp-246.component';
import { Service246Service } from '../../services/service-246.service';

describe('Comp246Component', () => {
  let component: Comp246Component;
  let fixture: ComponentFixture<Comp246Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp246Component ],
providers: [Service246Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

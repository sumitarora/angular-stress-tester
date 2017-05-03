import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp30Component } from './comp-30.component';
import { Service30Service } from '../../services/service-30.service';

describe('Comp30Component', () => {
  let component: Comp30Component;
  let fixture: ComponentFixture<Comp30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp30Component ],
providers: [Service30Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

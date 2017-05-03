import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp529Component } from './comp-529.component';
import { Service529Service } from '../../services/service-529.service';

describe('Comp529Component', () => {
  let component: Comp529Component;
  let fixture: ComponentFixture<Comp529Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp529Component ],
providers: [Service529Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

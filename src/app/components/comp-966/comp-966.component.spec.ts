import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp966Component } from './comp-966.component';
import { Service966Service } from '../../services/service-966.service';

describe('Comp966Component', () => {
  let component: Comp966Component;
  let fixture: ComponentFixture<Comp966Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp966Component ],
providers: [Service966Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp966Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

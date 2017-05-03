import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp862Component } from './comp-862.component';
import { Service862Service } from '../../services/service-862.service';

describe('Comp862Component', () => {
  let component: Comp862Component;
  let fixture: ComponentFixture<Comp862Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp862Component ],
providers: [Service862Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

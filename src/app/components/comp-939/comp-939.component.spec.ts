import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp939Component } from './comp-939.component';
import { Service939Service } from '../../services/service-939.service';

describe('Comp939Component', () => {
  let component: Comp939Component;
  let fixture: ComponentFixture<Comp939Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp939Component ],
providers: [Service939Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp939Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

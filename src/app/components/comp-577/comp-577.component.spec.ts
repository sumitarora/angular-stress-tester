import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp577Component } from './comp-577.component';
import { Service577Service } from '../../services/service-577.service';

describe('Comp577Component', () => {
  let component: Comp577Component;
  let fixture: ComponentFixture<Comp577Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp577Component ],
providers: [Service577Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

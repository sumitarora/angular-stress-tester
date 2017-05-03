import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp851Component } from './comp-851.component';
import { Service851Service } from '../../services/service-851.service';

describe('Comp851Component', () => {
  let component: Comp851Component;
  let fixture: ComponentFixture<Comp851Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp851Component ],
providers: [Service851Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp851Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

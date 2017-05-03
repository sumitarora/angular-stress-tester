import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp687Component } from './comp-687.component';
import { Service687Service } from '../../services/service-687.service';

describe('Comp687Component', () => {
  let component: Comp687Component;
  let fixture: ComponentFixture<Comp687Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp687Component ],
providers: [Service687Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp687Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

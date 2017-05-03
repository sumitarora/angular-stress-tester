import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp680Component } from './comp-680.component';
import { Service680Service } from '../../services/service-680.service';

describe('Comp680Component', () => {
  let component: Comp680Component;
  let fixture: ComponentFixture<Comp680Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp680Component ],
providers: [Service680Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

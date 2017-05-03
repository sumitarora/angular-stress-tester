import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp78Component } from './comp-78.component';
import { Service78Service } from '../../services/service-78.service';

describe('Comp78Component', () => {
  let component: Comp78Component;
  let fixture: ComponentFixture<Comp78Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp78Component ],
providers: [Service78Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

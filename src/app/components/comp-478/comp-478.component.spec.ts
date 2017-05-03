import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp478Component } from './comp-478.component';
import { Service478Service } from '../../services/service-478.service';

describe('Comp478Component', () => {
  let component: Comp478Component;
  let fixture: ComponentFixture<Comp478Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp478Component ],
providers: [Service478Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

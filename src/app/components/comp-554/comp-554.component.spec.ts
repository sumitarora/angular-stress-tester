import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp554Component } from './comp-554.component';
import { Service554Service } from '../../services/service-554.service';

describe('Comp554Component', () => {
  let component: Comp554Component;
  let fixture: ComponentFixture<Comp554Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp554Component ],
providers: [Service554Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

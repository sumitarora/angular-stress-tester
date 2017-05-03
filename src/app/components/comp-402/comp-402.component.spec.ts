import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp402Component } from './comp-402.component';
import { Service402Service } from '../../services/service-402.service';

describe('Comp402Component', () => {
  let component: Comp402Component;
  let fixture: ComponentFixture<Comp402Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp402Component ],
providers: [Service402Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

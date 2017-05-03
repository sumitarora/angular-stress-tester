import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp233Component } from './comp-233.component';
import { Service233Service } from '../../services/service-233.service';

describe('Comp233Component', () => {
  let component: Comp233Component;
  let fixture: ComponentFixture<Comp233Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp233Component ],
providers: [Service233Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

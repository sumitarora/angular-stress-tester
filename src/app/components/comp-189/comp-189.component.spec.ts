import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp189Component } from './comp-189.component';
import { Service189Service } from '../../services/service-189.service';

describe('Comp189Component', () => {
  let component: Comp189Component;
  let fixture: ComponentFixture<Comp189Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp189Component ],
providers: [Service189Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

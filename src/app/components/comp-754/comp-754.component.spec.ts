import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp754Component } from './comp-754.component';
import { Service754Service } from '../../services/service-754.service';

describe('Comp754Component', () => {
  let component: Comp754Component;
  let fixture: ComponentFixture<Comp754Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp754Component ],
providers: [Service754Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

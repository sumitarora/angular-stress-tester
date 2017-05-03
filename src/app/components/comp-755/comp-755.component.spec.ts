import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp755Component } from './comp-755.component';
import { Service755Service } from '../../services/service-755.service';

describe('Comp755Component', () => {
  let component: Comp755Component;
  let fixture: ComponentFixture<Comp755Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp755Component ],
providers: [Service755Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp17Component } from './comp-17.component';
import { Service17Service } from '../../services/service-17.service';

describe('Comp17Component', () => {
  let component: Comp17Component;
  let fixture: ComponentFixture<Comp17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp17Component ],
providers: [Service17Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

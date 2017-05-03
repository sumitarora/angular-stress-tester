import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp607Component } from './comp-607.component';
import { Service607Service } from '../../services/service-607.service';

describe('Comp607Component', () => {
  let component: Comp607Component;
  let fixture: ComponentFixture<Comp607Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp607Component ],
providers: [Service607Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

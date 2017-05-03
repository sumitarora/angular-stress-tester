import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp914Component } from './comp-914.component';
import { Service914Service } from '../../services/service-914.service';

describe('Comp914Component', () => {
  let component: Comp914Component;
  let fixture: ComponentFixture<Comp914Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp914Component ],
providers: [Service914Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp914Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

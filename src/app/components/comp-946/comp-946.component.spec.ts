import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp946Component } from './comp-946.component';
import { Service946Service } from '../../services/service-946.service';

describe('Comp946Component', () => {
  let component: Comp946Component;
  let fixture: ComponentFixture<Comp946Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp946Component ],
providers: [Service946Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp946Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

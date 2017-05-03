import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp88Component } from './comp-88.component';
import { Service88Service } from '../../services/service-88.service';

describe('Comp88Component', () => {
  let component: Comp88Component;
  let fixture: ComponentFixture<Comp88Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp88Component ],
providers: [Service88Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp88Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

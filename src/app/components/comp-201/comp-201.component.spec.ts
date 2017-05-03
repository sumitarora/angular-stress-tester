import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp201Component } from './comp-201.component';
import { Service201Service } from '../../services/service-201.service';

describe('Comp201Component', () => {
  let component: Comp201Component;
  let fixture: ComponentFixture<Comp201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp201Component ],
providers: [Service201Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

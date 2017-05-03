import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp586Component } from './comp-586.component';
import { Service586Service } from '../../services/service-586.service';

describe('Comp586Component', () => {
  let component: Comp586Component;
  let fixture: ComponentFixture<Comp586Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp586Component ],
providers: [Service586Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

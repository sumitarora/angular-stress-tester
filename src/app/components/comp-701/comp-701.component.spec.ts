import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp701Component } from './comp-701.component';
import { Service701Service } from '../../services/service-701.service';

describe('Comp701Component', () => {
  let component: Comp701Component;
  let fixture: ComponentFixture<Comp701Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp701Component ],
providers: [Service701Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

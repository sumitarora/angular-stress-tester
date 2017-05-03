import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp335Component } from './comp-335.component';
import { Service335Service } from '../../services/service-335.service';

describe('Comp335Component', () => {
  let component: Comp335Component;
  let fixture: ComponentFixture<Comp335Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp335Component ],
providers: [Service335Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

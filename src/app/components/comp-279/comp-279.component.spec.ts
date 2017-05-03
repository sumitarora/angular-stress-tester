import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp279Component } from './comp-279.component';
import { Service279Service } from '../../services/service-279.service';

describe('Comp279Component', () => {
  let component: Comp279Component;
  let fixture: ComponentFixture<Comp279Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp279Component ],
providers: [Service279Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

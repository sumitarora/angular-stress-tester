import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp621Component } from './comp-621.component';
import { Service621Service } from '../../services/service-621.service';

describe('Comp621Component', () => {
  let component: Comp621Component;
  let fixture: ComponentFixture<Comp621Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp621Component ],
providers: [Service621Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

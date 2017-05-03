import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp724Component } from './comp-724.component';
import { Service724Service } from '../../services/service-724.service';

describe('Comp724Component', () => {
  let component: Comp724Component;
  let fixture: ComponentFixture<Comp724Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp724Component ],
providers: [Service724Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

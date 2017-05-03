import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp592Component } from './comp-592.component';
import { Service592Service } from '../../services/service-592.service';

describe('Comp592Component', () => {
  let component: Comp592Component;
  let fixture: ComponentFixture<Comp592Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp592Component ],
providers: [Service592Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

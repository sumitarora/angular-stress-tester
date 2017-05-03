import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp202Component } from './comp-202.component';
import { Service202Service } from '../../services/service-202.service';

describe('Comp202Component', () => {
  let component: Comp202Component;
  let fixture: ComponentFixture<Comp202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp202Component ],
providers: [Service202Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

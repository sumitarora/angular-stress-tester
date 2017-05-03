import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp236Component } from './comp-236.component';
import { Service236Service } from '../../services/service-236.service';

describe('Comp236Component', () => {
  let component: Comp236Component;
  let fixture: ComponentFixture<Comp236Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp236Component ],
providers: [Service236Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

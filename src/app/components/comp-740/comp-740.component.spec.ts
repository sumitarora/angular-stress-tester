import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp740Component } from './comp-740.component';
import { Service740Service } from '../../services/service-740.service';

describe('Comp740Component', () => {
  let component: Comp740Component;
  let fixture: ComponentFixture<Comp740Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp740Component ],
providers: [Service740Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

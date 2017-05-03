import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp438Component } from './comp-438.component';
import { Service438Service } from '../../services/service-438.service';

describe('Comp438Component', () => {
  let component: Comp438Component;
  let fixture: ComponentFixture<Comp438Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp438Component ],
providers: [Service438Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp432Component } from './comp-432.component';
import { Service432Service } from '../../services/service-432.service';

describe('Comp432Component', () => {
  let component: Comp432Component;
  let fixture: ComponentFixture<Comp432Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp432Component ],
providers: [Service432Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

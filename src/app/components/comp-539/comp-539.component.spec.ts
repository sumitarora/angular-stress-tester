import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp539Component } from './comp-539.component';
import { Service539Service } from '../../services/service-539.service';

describe('Comp539Component', () => {
  let component: Comp539Component;
  let fixture: ComponentFixture<Comp539Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp539Component ],
providers: [Service539Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

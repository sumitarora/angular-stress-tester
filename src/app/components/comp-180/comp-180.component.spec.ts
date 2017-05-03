import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp180Component } from './comp-180.component';
import { Service180Service } from '../../services/service-180.service';

describe('Comp180Component', () => {
  let component: Comp180Component;
  let fixture: ComponentFixture<Comp180Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp180Component ],
providers: [Service180Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

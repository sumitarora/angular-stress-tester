import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp380Component } from './comp-380.component';
import { Service380Service } from '../../services/service-380.service';

describe('Comp380Component', () => {
  let component: Comp380Component;
  let fixture: ComponentFixture<Comp380Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp380Component ],
providers: [Service380Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

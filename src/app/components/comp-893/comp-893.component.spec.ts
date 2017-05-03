import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp893Component } from './comp-893.component';
import { Service893Service } from '../../services/service-893.service';

describe('Comp893Component', () => {
  let component: Comp893Component;
  let fixture: ComponentFixture<Comp893Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp893Component ],
providers: [Service893Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

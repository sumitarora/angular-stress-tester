import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp955Component } from './comp-955.component';
import { Service955Service } from '../../services/service-955.service';

describe('Comp955Component', () => {
  let component: Comp955Component;
  let fixture: ComponentFixture<Comp955Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp955Component ],
providers: [Service955Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

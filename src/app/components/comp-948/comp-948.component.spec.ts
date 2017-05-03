import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp948Component } from './comp-948.component';
import { Service948Service } from '../../services/service-948.service';

describe('Comp948Component', () => {
  let component: Comp948Component;
  let fixture: ComponentFixture<Comp948Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp948Component ],
providers: [Service948Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

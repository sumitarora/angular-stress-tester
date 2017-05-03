import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp501Component } from './comp-501.component';
import { Service501Service } from '../../services/service-501.service';

describe('Comp501Component', () => {
  let component: Comp501Component;
  let fixture: ComponentFixture<Comp501Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp501Component ],
providers: [Service501Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

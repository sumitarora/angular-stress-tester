import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp664Component } from './comp-664.component';
import { Service664Service } from '../../services/service-664.service';

describe('Comp664Component', () => {
  let component: Comp664Component;
  let fixture: ComponentFixture<Comp664Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp664Component ],
providers: [Service664Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp664Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp336Component } from './comp-336.component';
import { Service336Service } from '../../services/service-336.service';

describe('Comp336Component', () => {
  let component: Comp336Component;
  let fixture: ComponentFixture<Comp336Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp336Component ],
providers: [Service336Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

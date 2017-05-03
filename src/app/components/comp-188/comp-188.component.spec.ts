import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp188Component } from './comp-188.component';
import { Service188Service } from '../../services/service-188.service';

describe('Comp188Component', () => {
  let component: Comp188Component;
  let fixture: ComponentFixture<Comp188Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp188Component ],
providers: [Service188Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

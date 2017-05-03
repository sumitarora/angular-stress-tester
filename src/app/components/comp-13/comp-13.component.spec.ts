import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp13Component } from './comp-13.component';
import { Service13Service } from '../../services/service-13.service';

describe('Comp13Component', () => {
  let component: Comp13Component;
  let fixture: ComponentFixture<Comp13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp13Component ],
providers: [Service13Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp616Component } from './comp-616.component';
import { Service616Service } from '../../services/service-616.service';

describe('Comp616Component', () => {
  let component: Comp616Component;
  let fixture: ComponentFixture<Comp616Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp616Component ],
providers: [Service616Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

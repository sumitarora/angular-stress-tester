import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp589Component } from './comp-589.component';
import { Service589Service } from '../../services/service-589.service';

describe('Comp589Component', () => {
  let component: Comp589Component;
  let fixture: ComponentFixture<Comp589Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp589Component ],
providers: [Service589Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

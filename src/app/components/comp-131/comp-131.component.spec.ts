import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp131Component } from './comp-131.component';
import { Service131Service } from '../../services/service-131.service';

describe('Comp131Component', () => {
  let component: Comp131Component;
  let fixture: ComponentFixture<Comp131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp131Component ],
providers: [Service131Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

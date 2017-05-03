import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp265Component } from './comp-265.component';
import { Service265Service } from '../../services/service-265.service';

describe('Comp265Component', () => {
  let component: Comp265Component;
  let fixture: ComponentFixture<Comp265Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp265Component ],
providers: [Service265Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp603Component } from './comp-603.component';
import { Service603Service } from '../../services/service-603.service';

describe('Comp603Component', () => {
  let component: Comp603Component;
  let fixture: ComponentFixture<Comp603Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp603Component ],
providers: [Service603Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp262Component } from './comp-262.component';
import { Service262Service } from '../../services/service-262.service';

describe('Comp262Component', () => {
  let component: Comp262Component;
  let fixture: ComponentFixture<Comp262Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp262Component ],
providers: [Service262Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

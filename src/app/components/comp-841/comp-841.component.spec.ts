import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp841Component } from './comp-841.component';
import { Service841Service } from '../../services/service-841.service';

describe('Comp841Component', () => {
  let component: Comp841Component;
  let fixture: ComponentFixture<Comp841Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp841Component ],
providers: [Service841Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp841Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

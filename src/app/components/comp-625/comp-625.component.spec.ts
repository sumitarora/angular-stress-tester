import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp625Component } from './comp-625.component';
import { Service625Service } from '../../services/service-625.service';

describe('Comp625Component', () => {
  let component: Comp625Component;
  let fixture: ComponentFixture<Comp625Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp625Component ],
providers: [Service625Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

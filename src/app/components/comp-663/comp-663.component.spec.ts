import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp663Component } from './comp-663.component';
import { Service663Service } from '../../services/service-663.service';

describe('Comp663Component', () => {
  let component: Comp663Component;
  let fixture: ComponentFixture<Comp663Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp663Component ],
providers: [Service663Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

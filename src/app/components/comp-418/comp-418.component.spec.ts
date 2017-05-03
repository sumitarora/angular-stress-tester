import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp418Component } from './comp-418.component';
import { Service418Service } from '../../services/service-418.service';

describe('Comp418Component', () => {
  let component: Comp418Component;
  let fixture: ComponentFixture<Comp418Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp418Component ],
providers: [Service418Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

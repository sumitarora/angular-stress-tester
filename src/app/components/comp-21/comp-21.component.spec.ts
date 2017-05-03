import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp21Component } from './comp-21.component';
import { Service21Service } from '../../services/service-21.service';

describe('Comp21Component', () => {
  let component: Comp21Component;
  let fixture: ComponentFixture<Comp21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp21Component ],
providers: [Service21Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

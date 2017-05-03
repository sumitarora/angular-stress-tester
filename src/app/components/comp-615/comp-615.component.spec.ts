import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp615Component } from './comp-615.component';
import { Service615Service } from '../../services/service-615.service';

describe('Comp615Component', () => {
  let component: Comp615Component;
  let fixture: ComponentFixture<Comp615Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp615Component ],
providers: [Service615Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

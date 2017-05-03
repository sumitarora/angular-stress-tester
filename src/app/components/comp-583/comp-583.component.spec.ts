import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp583Component } from './comp-583.component';
import { Service583Service } from '../../services/service-583.service';

describe('Comp583Component', () => {
  let component: Comp583Component;
  let fixture: ComponentFixture<Comp583Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp583Component ],
providers: [Service583Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp885Component } from './comp-885.component';
import { Service885Service } from '../../services/service-885.service';

describe('Comp885Component', () => {
  let component: Comp885Component;
  let fixture: ComponentFixture<Comp885Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp885Component ],
providers: [Service885Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

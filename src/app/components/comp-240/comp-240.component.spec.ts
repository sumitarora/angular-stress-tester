import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp240Component } from './comp-240.component';
import { Service240Service } from '../../services/service-240.service';

describe('Comp240Component', () => {
  let component: Comp240Component;
  let fixture: ComponentFixture<Comp240Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp240Component ],
providers: [Service240Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

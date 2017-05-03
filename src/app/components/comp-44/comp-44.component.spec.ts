import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp44Component } from './comp-44.component';
import { Service44Service } from '../../services/service-44.service';

describe('Comp44Component', () => {
  let component: Comp44Component;
  let fixture: ComponentFixture<Comp44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp44Component ],
providers: [Service44Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

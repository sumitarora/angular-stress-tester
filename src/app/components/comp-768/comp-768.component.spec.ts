import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp768Component } from './comp-768.component';
import { Service768Service } from '../../services/service-768.service';

describe('Comp768Component', () => {
  let component: Comp768Component;
  let fixture: ComponentFixture<Comp768Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp768Component ],
providers: [Service768Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp32Component } from './comp-32.component';
import { Service32Service } from '../../services/service-32.service';

describe('Comp32Component', () => {
  let component: Comp32Component;
  let fixture: ComponentFixture<Comp32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp32Component ],
providers: [Service32Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

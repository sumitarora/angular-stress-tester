import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp419Component } from './comp-419.component';
import { Service419Service } from '../../services/service-419.service';

describe('Comp419Component', () => {
  let component: Comp419Component;
  let fixture: ComponentFixture<Comp419Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp419Component ],
providers: [Service419Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

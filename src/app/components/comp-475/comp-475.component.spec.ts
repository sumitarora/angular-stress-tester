import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp475Component } from './comp-475.component';
import { Service475Service } from '../../services/service-475.service';

describe('Comp475Component', () => {
  let component: Comp475Component;
  let fixture: ComponentFixture<Comp475Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp475Component ],
providers: [Service475Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

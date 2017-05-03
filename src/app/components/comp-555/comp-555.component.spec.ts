import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp555Component } from './comp-555.component';
import { Service555Service } from '../../services/service-555.service';

describe('Comp555Component', () => {
  let component: Comp555Component;
  let fixture: ComponentFixture<Comp555Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp555Component ],
providers: [Service555Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

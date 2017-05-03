import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp897Component } from './comp-897.component';
import { Service897Service } from '../../services/service-897.service';

describe('Comp897Component', () => {
  let component: Comp897Component;
  let fixture: ComponentFixture<Comp897Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp897Component ],
providers: [Service897Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp897Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

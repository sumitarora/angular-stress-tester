import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp915Component } from './comp-915.component';
import { Service915Service } from '../../services/service-915.service';

describe('Comp915Component', () => {
  let component: Comp915Component;
  let fixture: ComponentFixture<Comp915Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp915Component ],
providers: [Service915Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

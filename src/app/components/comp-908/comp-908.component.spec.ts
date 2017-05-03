import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp908Component } from './comp-908.component';
import { Service908Service } from '../../services/service-908.service';

describe('Comp908Component', () => {
  let component: Comp908Component;
  let fixture: ComponentFixture<Comp908Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp908Component ],
providers: [Service908Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

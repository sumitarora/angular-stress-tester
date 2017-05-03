import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp251Component } from './comp-251.component';
import { Service251Service } from '../../services/service-251.service';

describe('Comp251Component', () => {
  let component: Comp251Component;
  let fixture: ComponentFixture<Comp251Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp251Component ],
providers: [Service251Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

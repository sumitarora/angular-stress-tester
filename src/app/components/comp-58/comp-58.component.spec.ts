import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp58Component } from './comp-58.component';
import { Service58Service } from '../../services/service-58.service';

describe('Comp58Component', () => {
  let component: Comp58Component;
  let fixture: ComponentFixture<Comp58Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp58Component ],
providers: [Service58Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

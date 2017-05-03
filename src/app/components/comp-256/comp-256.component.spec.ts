import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp256Component } from './comp-256.component';
import { Service256Service } from '../../services/service-256.service';

describe('Comp256Component', () => {
  let component: Comp256Component;
  let fixture: ComponentFixture<Comp256Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp256Component ],
providers: [Service256Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

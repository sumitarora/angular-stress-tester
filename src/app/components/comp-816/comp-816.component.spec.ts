import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp816Component } from './comp-816.component';
import { Service816Service } from '../../services/service-816.service';

describe('Comp816Component', () => {
  let component: Comp816Component;
  let fixture: ComponentFixture<Comp816Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp816Component ],
providers: [Service816Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp816Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

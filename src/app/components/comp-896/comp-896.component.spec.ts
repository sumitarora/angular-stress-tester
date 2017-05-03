import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp896Component } from './comp-896.component';
import { Service896Service } from '../../services/service-896.service';

describe('Comp896Component', () => {
  let component: Comp896Component;
  let fixture: ComponentFixture<Comp896Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp896Component ],
providers: [Service896Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp896Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp826Component } from './comp-826.component';
import { Service826Service } from '../../services/service-826.service';

describe('Comp826Component', () => {
  let component: Comp826Component;
  let fixture: ComponentFixture<Comp826Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp826Component ],
providers: [Service826Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp826Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

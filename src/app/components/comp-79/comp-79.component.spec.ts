import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp79Component } from './comp-79.component';
import { Service79Service } from '../../services/service-79.service';

describe('Comp79Component', () => {
  let component: Comp79Component;
  let fixture: ComponentFixture<Comp79Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp79Component ],
providers: [Service79Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp79Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

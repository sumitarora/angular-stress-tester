import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp403Component } from './comp-403.component';
import { Service403Service } from '../../services/service-403.service';

describe('Comp403Component', () => {
  let component: Comp403Component;
  let fixture: ComponentFixture<Comp403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp403Component ],
providers: [Service403Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

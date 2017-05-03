import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp932Component } from './comp-932.component';
import { Service932Service } from '../../services/service-932.service';

describe('Comp932Component', () => {
  let component: Comp932Component;
  let fixture: ComponentFixture<Comp932Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp932Component ],
providers: [Service932Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

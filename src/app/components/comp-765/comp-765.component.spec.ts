import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp765Component } from './comp-765.component';
import { Service765Service } from '../../services/service-765.service';

describe('Comp765Component', () => {
  let component: Comp765Component;
  let fixture: ComponentFixture<Comp765Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp765Component ],
providers: [Service765Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

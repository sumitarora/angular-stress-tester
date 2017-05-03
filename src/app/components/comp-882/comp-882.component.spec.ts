import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp882Component } from './comp-882.component';
import { Service882Service } from '../../services/service-882.service';

describe('Comp882Component', () => {
  let component: Comp882Component;
  let fixture: ComponentFixture<Comp882Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp882Component ],
providers: [Service882Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

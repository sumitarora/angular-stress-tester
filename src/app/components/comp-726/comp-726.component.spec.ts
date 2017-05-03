import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp726Component } from './comp-726.component';
import { Service726Service } from '../../services/service-726.service';

describe('Comp726Component', () => {
  let component: Comp726Component;
  let fixture: ComponentFixture<Comp726Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp726Component ],
providers: [Service726Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

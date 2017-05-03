import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp366Component } from './comp-366.component';
import { Service366Service } from '../../services/service-366.service';

describe('Comp366Component', () => {
  let component: Comp366Component;
  let fixture: ComponentFixture<Comp366Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp366Component ],
providers: [Service366Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

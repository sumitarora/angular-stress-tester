import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp641Component } from './comp-641.component';
import { Service641Service } from '../../services/service-641.service';

describe('Comp641Component', () => {
  let component: Comp641Component;
  let fixture: ComponentFixture<Comp641Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp641Component ],
providers: [Service641Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

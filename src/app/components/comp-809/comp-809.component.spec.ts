import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp809Component } from './comp-809.component';
import { Service809Service } from '../../services/service-809.service';

describe('Comp809Component', () => {
  let component: Comp809Component;
  let fixture: ComponentFixture<Comp809Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp809Component ],
providers: [Service809Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp809Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

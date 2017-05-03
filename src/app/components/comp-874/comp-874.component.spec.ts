import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp874Component } from './comp-874.component';
import { Service874Service } from '../../services/service-874.service';

describe('Comp874Component', () => {
  let component: Comp874Component;
  let fixture: ComponentFixture<Comp874Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp874Component ],
providers: [Service874Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

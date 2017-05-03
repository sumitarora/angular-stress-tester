import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp221Component } from './comp-221.component';
import { Service221Service } from '../../services/service-221.service';

describe('Comp221Component', () => {
  let component: Comp221Component;
  let fixture: ComponentFixture<Comp221Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp221Component ],
providers: [Service221Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

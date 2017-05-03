import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp613Component } from './comp-613.component';
import { Service613Service } from '../../services/service-613.service';

describe('Comp613Component', () => {
  let component: Comp613Component;
  let fixture: ComponentFixture<Comp613Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp613Component ],
providers: [Service613Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

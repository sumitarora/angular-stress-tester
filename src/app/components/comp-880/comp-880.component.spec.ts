import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp880Component } from './comp-880.component';
import { Service880Service } from '../../services/service-880.service';

describe('Comp880Component', () => {
  let component: Comp880Component;
  let fixture: ComponentFixture<Comp880Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp880Component ],
providers: [Service880Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

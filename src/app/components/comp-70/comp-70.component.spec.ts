import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp70Component } from './comp-70.component';
import { Service70Service } from '../../services/service-70.service';

describe('Comp70Component', () => {
  let component: Comp70Component;
  let fixture: ComponentFixture<Comp70Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp70Component ],
providers: [Service70Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp761Component } from './comp-761.component';
import { Service761Service } from '../../services/service-761.service';

describe('Comp761Component', () => {
  let component: Comp761Component;
  let fixture: ComponentFixture<Comp761Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp761Component ],
providers: [Service761Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

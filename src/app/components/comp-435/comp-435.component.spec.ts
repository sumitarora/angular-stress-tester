import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp435Component } from './comp-435.component';
import { Service435Service } from '../../services/service-435.service';

describe('Comp435Component', () => {
  let component: Comp435Component;
  let fixture: ComponentFixture<Comp435Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp435Component ],
providers: [Service435Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

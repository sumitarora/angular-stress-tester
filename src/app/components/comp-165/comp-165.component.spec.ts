import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp165Component } from './comp-165.component';
import { Service165Service } from '../../services/service-165.service';

describe('Comp165Component', () => {
  let component: Comp165Component;
  let fixture: ComponentFixture<Comp165Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp165Component ],
providers: [Service165Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp360Component } from './comp-360.component';
import { Service360Service } from '../../services/service-360.service';

describe('Comp360Component', () => {
  let component: Comp360Component;
  let fixture: ComponentFixture<Comp360Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp360Component ],
providers: [Service360Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp911Component } from './comp-911.component';
import { Service911Service } from '../../services/service-911.service';

describe('Comp911Component', () => {
  let component: Comp911Component;
  let fixture: ComponentFixture<Comp911Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp911Component ],
providers: [Service911Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

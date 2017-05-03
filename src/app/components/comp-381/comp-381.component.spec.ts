import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp381Component } from './comp-381.component';
import { Service381Service } from '../../services/service-381.service';

describe('Comp381Component', () => {
  let component: Comp381Component;
  let fixture: ComponentFixture<Comp381Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp381Component ],
providers: [Service381Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

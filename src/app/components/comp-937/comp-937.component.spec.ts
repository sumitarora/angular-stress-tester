import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp937Component } from './comp-937.component';
import { Service937Service } from '../../services/service-937.service';

describe('Comp937Component', () => {
  let component: Comp937Component;
  let fixture: ComponentFixture<Comp937Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp937Component ],
providers: [Service937Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp937Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

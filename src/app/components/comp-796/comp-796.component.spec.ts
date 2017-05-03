import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp796Component } from './comp-796.component';
import { Service796Service } from '../../services/service-796.service';

describe('Comp796Component', () => {
  let component: Comp796Component;
  let fixture: ComponentFixture<Comp796Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp796Component ],
providers: [Service796Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

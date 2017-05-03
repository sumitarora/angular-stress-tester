import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp790Component } from './comp-790.component';
import { Service790Service } from '../../services/service-790.service';

describe('Comp790Component', () => {
  let component: Comp790Component;
  let fixture: ComponentFixture<Comp790Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp790Component ],
providers: [Service790Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp790Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

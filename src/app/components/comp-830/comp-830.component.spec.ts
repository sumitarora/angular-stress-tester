import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp830Component } from './comp-830.component';
import { Service830Service } from '../../services/service-830.service';

describe('Comp830Component', () => {
  let component: Comp830Component;
  let fixture: ComponentFixture<Comp830Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp830Component ],
providers: [Service830Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

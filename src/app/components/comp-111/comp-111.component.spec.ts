import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp111Component } from './comp-111.component';
import { Service111Service } from '../../services/service-111.service';

describe('Comp111Component', () => {
  let component: Comp111Component;
  let fixture: ComponentFixture<Comp111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp111Component ],
providers: [Service111Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

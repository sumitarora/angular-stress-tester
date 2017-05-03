import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp449Component } from './comp-449.component';
import { Service449Service } from '../../services/service-449.service';

describe('Comp449Component', () => {
  let component: Comp449Component;
  let fixture: ComponentFixture<Comp449Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp449Component ],
providers: [Service449Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

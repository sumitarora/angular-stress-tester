import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp295Component } from './comp-295.component';
import { Service295Service } from '../../services/service-295.service';

describe('Comp295Component', () => {
  let component: Comp295Component;
  let fixture: ComponentFixture<Comp295Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp295Component ],
providers: [Service295Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

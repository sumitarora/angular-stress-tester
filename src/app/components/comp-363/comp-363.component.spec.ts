import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp363Component } from './comp-363.component';
import { Service363Service } from '../../services/service-363.service';

describe('Comp363Component', () => {
  let component: Comp363Component;
  let fixture: ComponentFixture<Comp363Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp363Component ],
providers: [Service363Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

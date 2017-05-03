import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp979Component } from './comp-979.component';
import { Service979Service } from '../../services/service-979.service';

describe('Comp979Component', () => {
  let component: Comp979Component;
  let fixture: ComponentFixture<Comp979Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp979Component ],
providers: [Service979Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp448Component } from './comp-448.component';
import { Service448Service } from '../../services/service-448.service';

describe('Comp448Component', () => {
  let component: Comp448Component;
  let fixture: ComponentFixture<Comp448Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp448Component ],
providers: [Service448Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

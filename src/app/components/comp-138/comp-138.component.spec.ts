import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp138Component } from './comp-138.component';
import { Service138Service } from '../../services/service-138.service';

describe('Comp138Component', () => {
  let component: Comp138Component;
  let fixture: ComponentFixture<Comp138Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp138Component ],
providers: [Service138Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

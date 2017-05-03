import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp278Component } from './comp-278.component';
import { Service278Service } from '../../services/service-278.service';

describe('Comp278Component', () => {
  let component: Comp278Component;
  let fixture: ComponentFixture<Comp278Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp278Component ],
providers: [Service278Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

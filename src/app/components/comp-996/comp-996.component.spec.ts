import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp996Component } from './comp-996.component';
import { Service996Service } from '../../services/service-996.service';

describe('Comp996Component', () => {
  let component: Comp996Component;
  let fixture: ComponentFixture<Comp996Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp996Component ],
providers: [Service996Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp922Component } from './comp-922.component';
import { Service922Service } from '../../services/service-922.service';

describe('Comp922Component', () => {
  let component: Comp922Component;
  let fixture: ComponentFixture<Comp922Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp922Component ],
providers: [Service922Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

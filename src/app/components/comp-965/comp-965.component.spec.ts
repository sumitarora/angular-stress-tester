import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp965Component } from './comp-965.component';
import { Service965Service } from '../../services/service-965.service';

describe('Comp965Component', () => {
  let component: Comp965Component;
  let fixture: ComponentFixture<Comp965Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp965Component ],
providers: [Service965Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

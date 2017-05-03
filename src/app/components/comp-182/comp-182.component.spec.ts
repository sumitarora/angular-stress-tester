import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp182Component } from './comp-182.component';
import { Service182Service } from '../../services/service-182.service';

describe('Comp182Component', () => {
  let component: Comp182Component;
  let fixture: ComponentFixture<Comp182Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp182Component ],
providers: [Service182Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

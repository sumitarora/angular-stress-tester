import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp956Component } from './comp-956.component';
import { Service956Service } from '../../services/service-956.service';

describe('Comp956Component', () => {
  let component: Comp956Component;
  let fixture: ComponentFixture<Comp956Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp956Component ],
providers: [Service956Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp956Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

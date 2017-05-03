import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp54Component } from './comp-54.component';
import { Service54Service } from '../../services/service-54.service';

describe('Comp54Component', () => {
  let component: Comp54Component;
  let fixture: ComponentFixture<Comp54Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp54Component ],
providers: [Service54Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

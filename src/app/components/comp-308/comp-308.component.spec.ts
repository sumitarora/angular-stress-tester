import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp308Component } from './comp-308.component';
import { Service308Service } from '../../services/service-308.service';

describe('Comp308Component', () => {
  let component: Comp308Component;
  let fixture: ComponentFixture<Comp308Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp308Component ],
providers: [Service308Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp620Component } from './comp-620.component';
import { Service620Service } from '../../services/service-620.service';

describe('Comp620Component', () => {
  let component: Comp620Component;
  let fixture: ComponentFixture<Comp620Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp620Component ],
providers: [Service620Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

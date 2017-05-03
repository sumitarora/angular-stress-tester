import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp108Component } from './comp-108.component';
import { Service108Service } from '../../services/service-108.service';

describe('Comp108Component', () => {
  let component: Comp108Component;
  let fixture: ComponentFixture<Comp108Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp108Component ],
providers: [Service108Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

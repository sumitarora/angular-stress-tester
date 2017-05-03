import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp997Component } from './comp-997.component';
import { Service997Service } from '../../services/service-997.service';

describe('Comp997Component', () => {
  let component: Comp997Component;
  let fixture: ComponentFixture<Comp997Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp997Component ],
providers: [Service997Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

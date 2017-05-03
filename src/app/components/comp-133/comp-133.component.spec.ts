import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp133Component } from './comp-133.component';
import { Service133Service } from '../../services/service-133.service';

describe('Comp133Component', () => {
  let component: Comp133Component;
  let fixture: ComponentFixture<Comp133Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp133Component ],
providers: [Service133Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

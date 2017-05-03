import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp723Component } from './comp-723.component';
import { Service723Service } from '../../services/service-723.service';

describe('Comp723Component', () => {
  let component: Comp723Component;
  let fixture: ComponentFixture<Comp723Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp723Component ],
providers: [Service723Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

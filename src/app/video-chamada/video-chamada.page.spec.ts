import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoChamadaPage } from './video-chamada.page';

describe('VideoChamadaPage', () => {
  let component: VideoChamadaPage;
  let fixture: ComponentFixture<VideoChamadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoChamadaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoChamadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

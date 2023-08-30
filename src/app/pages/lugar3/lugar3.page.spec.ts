import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lugar3Page } from './lugar3.page';

describe('Lugar3Page', () => {
  let component: Lugar3Page;
  let fixture: ComponentFixture<Lugar3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Lugar3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

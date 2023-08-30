import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lugar2Page } from './lugar2.page';

describe('Lugar2Page', () => {
  let component: Lugar2Page;
  let fixture: ComponentFixture<Lugar2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Lugar2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

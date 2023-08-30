import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lugar9Page } from './lugar9.page';

describe('Lugar9Page', () => {
  let component: Lugar9Page;
  let fixture: ComponentFixture<Lugar9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Lugar9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

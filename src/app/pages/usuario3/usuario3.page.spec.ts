import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Usuario3Page } from './usuario3.page';

describe('Usuario3Page', () => {
  let component: Usuario3Page;
  let fixture: ComponentFixture<Usuario3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Usuario3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

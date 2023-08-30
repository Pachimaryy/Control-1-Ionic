import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Usuario4Page } from './usuario4.page';

describe('Usuario4Page', () => {
  let component: Usuario4Page;
  let fixture: ComponentFixture<Usuario4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Usuario4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

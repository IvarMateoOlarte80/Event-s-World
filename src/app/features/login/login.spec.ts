import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should require username and password', () => {
    let username = component.loginForm.controls['username'];
    let password = component.loginForm.controls['password'];

    expect(username.valid).toBeFalsy();
    expect(password.valid).toBeFalsy();

    username.setValue('testuser');
    password.setValue('password123');

    expect(username.valid).toBeTruthy();
    expect(password.valid).toBeTruthy();
  });
});

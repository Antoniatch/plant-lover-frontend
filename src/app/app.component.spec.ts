import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let appComponent: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);

    appComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app component', () => {
    expect(appComponent).toBeTruthy();

    const mainSection = fixture.debugElement.query(By.css('.main'));
    expect(mainSection).toBeTruthy;
  });
});

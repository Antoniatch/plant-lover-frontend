import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { TopMenuComponent } from './top-menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('TopMenu Component', () => {
  let topMenuComponent: TopMenuComponent;
  let fixture: ComponentFixture<TopMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopMenuComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TopMenuComponent);

    topMenuComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app component', () => {
    expect(topMenuComponent).toBeTruthy();
  });

  it('should render all the links', () => {
    const links = fixture.debugElement.queryAll(By.css('a'));
    expect(links.length).toEqual(4);
  });
});

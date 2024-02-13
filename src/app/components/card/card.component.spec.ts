import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component successfully', () => {
    expect(component).toBeTruthy();
  });

  it('should render default values when no input is passed', () => {
    component.page = 'plants';

    const defaultValues = {
      name: '',
      family: 'NR',
      owners: 'NR',
      comments: 'NR',
      likes: 'NR',
    };

    fixture.detectChanges();

    const card = fixture.nativeElement;

    const title = card.querySelector('h5').textContent;
    const family = card.querySelector('[data-testid="card-family-span"]').textContent;
    const owners = card.querySelector('[data-testid="card-owners-span"]').textContent;
    const comments = card.querySelector('[data-testid="card-comments-span"]').textContent;
    const likes = card.querySelector('[data-testid="card-likes-span"]').textContent;

    expect(title).toBe(defaultValues.name);
    expect(family).toBe(defaultValues.family);
    expect(owners).toBe(defaultValues.owners);
    expect(comments).toBe(defaultValues.comments);
    expect(likes).toBe(defaultValues.likes);
  });
});

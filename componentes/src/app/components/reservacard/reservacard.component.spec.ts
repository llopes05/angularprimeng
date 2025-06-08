import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacardComponent } from './reservacard.component';

describe('ReservacardComponent', () => {
  let component: ReservacardComponent;
  let fixture: ComponentFixture<ReservacardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservacardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservacardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

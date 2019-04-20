import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtYourServiceComponent } from './at-your-service.component';

describe('AtYourServiceComponent', () => {
  let component: AtYourServiceComponent;
  let fixture: ComponentFixture<AtYourServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtYourServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtYourServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

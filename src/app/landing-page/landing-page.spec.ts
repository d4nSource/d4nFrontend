import { TestBed, async } from '@angular/core/testing';

import { LandingPageComponent} from './landing-page.component';
import { MdToolbarModule } from '@angular/material';

describe ('LandingPageComponent', () => {
    beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LandingPageComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(LandingPageComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
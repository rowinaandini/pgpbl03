import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { show } from 'src/store/loading/loading.action';
import { hide } from 'src/store/loading/loading.action';
import { loadingReducer } from 'src/store/loading/loading.reducers';

import { LoadingComponent } from './loading.component';
import { StoreModule } from '@ngrx/store';
import { AppState } from '@capacitor/app';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingComponent ],
      imports: [
        IonicModule.forRoot(),
        StoreModule.forRoot([]),
        StoreModule.forFeature('loading', loadingReducer)
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingComponent);
    store = TestBed.get(Store);


    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should hide loading component when it is not loading', () => {
    const compiled = fixture.nativeElement;

    store.dispatch(hide());
    fixture.detectChanges();

    expect(compiled.querySelected(".backdrop")).toBeNull();
  });

  it('should show loading component when it is loading', () => {
    const compiled = fixture.nativeElement;

    store.dispatch(show());
    fixture.detectChanges();

    expect(compiled.querySelected(".backdrop")).toBeNull();
  });
});

import { Component } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './store/actions/counter.actions';
import { counterReducer } from './store/reducers/counter.reduce';
import { selectCounter } from './store/selectors/counter.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    // Providing the store directly in the component using StoreModule.forRoot
    StoreModule.forRoot({ count: counterReducer }).providers
  ]
})
export class AppComponent {
  // This observable will store the current counter state from the store
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    // Select the current state using the selector
    this.count$ = this.store.select(selectCounter);
  }

  // Dispatch the increment action
  increment() {
    this.store.dispatch(increment());
  }

  // Dispatch the decrement action
  decrement() {
    this.store.dispatch(decrement());
  }

  // Dispatch the reset action
  reset() {
    this.store.dispatch(reset());
  }
}

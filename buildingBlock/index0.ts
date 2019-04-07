import { Observable, from } from 'rxjs';

let nums = [2,4,6,9,10];

//let numObservable$ = from(nums);

// let observer ={
//     next: value => console.log(value),
//     error: err => console.log(`ERROR: ${err}`),
//     complete: () => console.log('All done.')
// };

// numObservable$.subscribe(
//     value => console.log(value),
//     err => console.log(`ERROR: ${err}`),
//     () => console.log('All done.')
// );

//-----Custom Obvervable------
let evenNumber$ = Observable.create(subscriber =>{
    for (let currentNum of nums) {
        if (currentNum % 2 === 0) {
            subscriber.next(currentNum);
        } else {
            subscriber.error('Value is not even.');
        }
    }

    subscriber.complete();

});

evenNumber$.subscribe(
    value => console.log(value),
    err => console.log(`ERROR: ${err}`),
    () => console.log('All done.')
);

//Observables will never call error() and complete()
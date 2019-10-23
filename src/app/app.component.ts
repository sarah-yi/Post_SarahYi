import { Component } from '@angular/core';
// import { FormGroup } from '@angular/forms';

// interface ClassList {
//   white: boolean;
//   aqua: boolean;
//   large: boolean;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // nounInput = '';
  title = 'look at the cats!';

  // isWhite: boolean = false; // will be true or false (all 3 properties)
  // isAqua: boolean = false;
  // isLarge: boolean = false; // declaring property names
  // show: boolean = true;
  // numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]; numbers array
  posts = [
    { title: 'Cats', body: `oh wow oh yay`}, // array 
    { title: 'New Post 1', body: `more cats ok`}, 
    { title: 'New Post 2', body: `i came to play`}, 
    { title: 'New Post 3', body: `dont go away`}, 
    { title: 'New Post 4', body: `the cats will stay`}, 
    { title: 'New Post 5', body: `and sleep all day`} 
  ];

  onNewTitle(event, i) {
    // console.log(event, i); --> testing to see if it worked before implementing method
    this.posts[i].title = event;
  } 

  // classList: ClassList =  {
  //   white: this.isWhite,
  //   aqua: this.isAqua,
  //   large: this.isLarge 
  // }

  // changeColor() {
  //   this.classList.white = !this.classList.white;
  // }

  // changeBackground() {
  //   this.classList.aqua = !this.classList.aqua;
  // }

  // changeFontSize() {
  //   this.classList.large = !this.classList.large;
  // }

}

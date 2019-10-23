import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'single-post',
  templateUrl: './single-post.components.html'
})

export class SinglePost {
  @Input() title: string;
  @Input() comments: number;
  @Input() body: string;
  @Output() newTitle = new EventEmitter<string>(); // creating a custom event. 

  editing: boolean = false;

  editTitle() {
    this.editing = true;
  }

  saveTitle() {
    this.newTitle.emit(this.title); // emit = sending a message up to the parent component. 
    this.editing = false;
  }

}

// make sure the @Input is on the child component, not the parent component. this is the child. 
// app is the parent component 
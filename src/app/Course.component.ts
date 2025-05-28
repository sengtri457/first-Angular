import { Component } from '@angular/core';
// To import an image in Angular, you typically reference it in your template using the assets folder.
// Example usage in template: <img src="assets/img/your-image.png" alt="Description" />
@Component({
  selector: 'course',
  template: `
    <h1>My Name is: {{ test }}</h1>
    <h2 [style.color]="myFun.color" [className]="myFun.Name[0]">
      {{ myFun.Name[0] }}
    </h2>
    <button className="{{ nameClass }}" (click)="handleClick()">
      Click Me
    </button>
    <button className="{{ nameClass }}" (click)="handleClick1()">Remove</button>
    <img [src]="myFun.img[0]" alt="" />
  `,
  styles: [
    `
      h1 {
        text-align: center;
      }
      .btn {
        font-size: 1rem;
        padding: 0.5rem 1rem;
        text-align: center;
        margin: auto;
      }
      img {
        width: 200px;
        height: 200px;
      }
    `,
  ],
})
export class CourseComponent {
  test = 'Bun Sengtri';
  nameClass = 'btn';

  myFun: Myfun = {
    Fun: () => 'Hello',
    Name: ['Hello Bun Sengtri', 'Hello Bun Sengktri'],
    color: 'white',
    img: ['img/profile.JPG', 'img/pic.jpg'],
  };

  handleClick() {
    NewFun(this.myFun);
  }
  handleClick1() {
    NewFun1(this.myFun);
  }
}
interface Myfun {
  Fun: () => void;
  Name: string[];
  color?: string;
  img: string[];
}
const NewFun = (myFun: Myfun): void => {
  alert(myFun.Name[0]);
  if ((myFun.color = 'white')) {
    myFun.color = 'red';
    myFun.Name[0] = myFun.Name[1];
    myFun.img[0] = myFun.img[1];
  }
};
const NewFun1 = (myFun: Myfun): void => {
  alert(myFun.Name[0]);
  if ((myFun.color = 'red')) {
    myFun.color = 'white';
  }
  if ((myFun.Name[0] = myFun.Name[1])) {
    myFun.Name[0] = 'Bun Sengtri';
    myFun.img[0] = 'img/profile.JPG';
  }
};

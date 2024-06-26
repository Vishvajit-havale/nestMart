import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent {
  @Input() imageUrl: string = '';
  @Input() heading: string = '';
  @Input() subHeading: string = '';
}

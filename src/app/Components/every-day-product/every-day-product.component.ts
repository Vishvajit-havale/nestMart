import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-every-day-product',
  templateUrl: './every-day-product.component.html',
  styleUrls: ['./every-day-product.component.css']
})
export class EveryDayProductComponent {
  @Input() imageUrl: string='';
}

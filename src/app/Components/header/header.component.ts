import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private toastr:ToastrService){}
  ngOnInit(): void {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}

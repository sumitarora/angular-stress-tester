import { Component, OnInit } from '@angular/core';
import { Service879Service } from '../../services/service-879.service';

@Component({
  selector: 'app-comp-879',
  templateUrl: './comp-879.component.html',
  styleUrls: ['./comp-879.component.css']
})
export class Comp879Component implements OnInit {

  constructor(private _service: Service879Service) { }

  ngOnInit() {
  }

}

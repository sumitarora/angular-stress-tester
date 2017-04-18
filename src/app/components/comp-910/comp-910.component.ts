import { Component, OnInit } from '@angular/core';
import { Service910Service } from '../../services/service-910.service';

@Component({
  selector: 'app-comp-910',
  templateUrl: './comp-910.component.html',
  styleUrls: ['./comp-910.component.css']
})
export class Comp910Component implements OnInit {

  constructor(private _service: Service910Service) { }

  ngOnInit() {
  }

}

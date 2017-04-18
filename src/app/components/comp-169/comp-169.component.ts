import { Component, OnInit } from '@angular/core';
import { Service169Service } from '../../services/service-169.service';

@Component({
  selector: 'app-comp-169',
  templateUrl: './comp-169.component.html',
  styleUrls: ['./comp-169.component.css']
})
export class Comp169Component implements OnInit {

  constructor(private _service: Service169Service) { }

  ngOnInit() {
  }

}

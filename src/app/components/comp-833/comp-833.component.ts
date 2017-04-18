import { Component, OnInit } from '@angular/core';
import { Service833Service } from '../../services/service-833.service';

@Component({
  selector: 'app-comp-833',
  templateUrl: './comp-833.component.html',
  styleUrls: ['./comp-833.component.css']
})
export class Comp833Component implements OnInit {

  constructor(private _service: Service833Service) { }

  ngOnInit() {
  }

}

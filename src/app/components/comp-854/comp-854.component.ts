import { Component, OnInit } from '@angular/core';
import { Service854Service } from '../../services/service-854.service';

@Component({
  selector: 'app-comp-854',
  templateUrl: './comp-854.component.html',
  styleUrls: ['./comp-854.component.css']
})
export class Comp854Component implements OnInit {

  constructor(private _service: Service854Service) { }

  ngOnInit() {
  }

}

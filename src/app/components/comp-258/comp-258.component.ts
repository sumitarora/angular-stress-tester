import { Component, OnInit } from '@angular/core';
import { Service258Service } from '../../services/service-258.service';

@Component({
  selector: 'app-comp-258',
  templateUrl: './comp-258.component.html',
  styleUrls: ['./comp-258.component.css']
})
export class Comp258Component implements OnInit {

  constructor(private _service: Service258Service) { }

  ngOnInit() {
  }

}

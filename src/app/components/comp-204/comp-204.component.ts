import { Component, OnInit } from '@angular/core';
import { Service204Service } from '../../services/service-204.service';

@Component({
  selector: 'app-comp-204',
  templateUrl: './comp-204.component.html',
  styleUrls: ['./comp-204.component.css']
})
export class Comp204Component implements OnInit {

  constructor(private _service: Service204Service) { }

  ngOnInit() {
  }

}

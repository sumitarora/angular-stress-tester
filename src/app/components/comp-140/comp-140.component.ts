import { Component, OnInit } from '@angular/core';
import { Service140Service } from '../../services/service-140.service';

@Component({
  selector: 'app-comp-140',
  templateUrl: './comp-140.component.html',
  styleUrls: ['./comp-140.component.css']
})
export class Comp140Component implements OnInit {

  constructor(private _service: Service140Service) { }

  ngOnInit() {
  }

}

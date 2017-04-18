import { Component, OnInit } from '@angular/core';
import { Service132Service } from '../../services/service-132.service';

@Component({
  selector: 'app-comp-132',
  templateUrl: './comp-132.component.html',
  styleUrls: ['./comp-132.component.css']
})
export class Comp132Component implements OnInit {

  constructor(private _service: Service132Service) { }

  ngOnInit() {
  }

}

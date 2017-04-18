import { Component, OnInit } from '@angular/core';
import { Service466Service } from '../../services/service-466.service';

@Component({
  selector: 'app-comp-466',
  templateUrl: './comp-466.component.html',
  styleUrls: ['./comp-466.component.css']
})
export class Comp466Component implements OnInit {

  constructor(private _service: Service466Service) { }

  ngOnInit() {
  }

}

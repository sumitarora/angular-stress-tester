import { Component, OnInit } from '@angular/core';
import { Service195Service } from '../../services/service-195.service';

@Component({
  selector: 'app-comp-195',
  templateUrl: './comp-195.component.html',
  styleUrls: ['./comp-195.component.css']
})
export class Comp195Component implements OnInit {

  constructor(private _service: Service195Service) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Service985Service } from '../../services/service-985.service';

@Component({
  selector: 'app-comp-985',
  templateUrl: './comp-985.component.html',
  styleUrls: ['./comp-985.component.css']
})
export class Comp985Component implements OnInit {

  constructor(private _service: Service985Service) { }

  ngOnInit() {
  }

}

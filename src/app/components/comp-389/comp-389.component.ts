import { Component, OnInit } from '@angular/core';
import { Service389Service } from '../../services/service-389.service';

@Component({
  selector: 'app-comp-389',
  templateUrl: './comp-389.component.html',
  styleUrls: ['./comp-389.component.css']
})
export class Comp389Component implements OnInit {

  constructor(private _service: Service389Service) { }

  ngOnInit() {
  }

}

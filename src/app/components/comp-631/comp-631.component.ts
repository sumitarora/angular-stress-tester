import { Component, OnInit } from '@angular/core';
import { Service631Service } from '../../services/service-631.service';

@Component({
  selector: 'app-comp-631',
  templateUrl: './comp-631.component.html',
  styleUrls: ['./comp-631.component.css']
})
export class Comp631Component implements OnInit {

  constructor(private _service: Service631Service) { }

  ngOnInit() {
  }

}

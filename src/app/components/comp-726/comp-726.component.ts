import { Component, OnInit } from '@angular/core';
import { Service726Service } from '../../services/service-726.service';

@Component({
  selector: 'app-comp-726',
  templateUrl: './comp-726.component.html',
  styleUrls: ['./comp-726.component.css']
})
export class Comp726Component implements OnInit {

  constructor(private _service: Service726Service) { }

  ngOnInit() {
  }

}

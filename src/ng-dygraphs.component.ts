import { Component, Input, ElementRef, Renderer, OnChanges, ViewChild } from '@angular/core';
declare let Dygraph: any;

@Component({
  selector: 'ng-dygraphs',
  templateUrl: 'ng-dygraphs.component.html',
  styleUrls: ['ng-dygraphs.component.css']
})
/**
 * Wrapper arround Dygraphs
 * 
 * @class NgDygraphsComponent
 */
export class NgDygraphsComponent implements OnChanges {
  @Input() chartWidth: number = 640;
  @Input() chartHeight: number = 480;
  @Input() data: any;
  @Input() labels: string[];
  @Input() xlabel: string;
  @Input() ylabel: string;
  @Input() animatedZooms: boolean = false;
  @Input() title: string = '';
  @Input() axes: any;
  @Input() legend: string = 'always';
  @Input() pointSize: number;
  @Input() customVisibility: boolean = false;
  @ViewChild('chart') chart: ElementRef;
  g: any;
  loadingInProgress: boolean = true;
  constructor(private renderer: Renderer) {
  }
  /**
   * ngOnChanges
   * @method ngOnChanges
   * @return {void}
   */
  ngOnChanges() {
    if (this.data === undefined || this.data.length === 0) { return; };
    this.loadingInProgress = true;

    let options: any = {};
    if (this.labels) options.labels = this.labels;
    if (this.ylabel) options.ylabel = this.ylabel;
    if (this.xlabel) options.xlabel = this.xlabel;
    if (this.legend) options.legend = this.legend;
    if (this.animatedZooms) options.animatedZooms = this.animatedZooms;
    if (this.title) options.title = this.title;
    if (this.axes) options.axes = this.axes;
    if (this.pointSize) options.pointSize = this.pointSize;

    let initialVisibility: any[] = [];
    if (this.labels) {
      this.labels.forEach(a => {
        initialVisibility.push(true);
      });
    }
    if (this.labels) options.visibility = initialVisibility;

    setTimeout(() => {
      this.g = new Dygraph(this.chart.nativeElement,
        this.data,
        options
      );
      this.loadingInProgress = false;
    }, 500);
  }

  changeVisibility(el: any) {
    let elem = el.currentTarget;
    this.g.setVisibility(parseInt(elem.id), elem.checked);
  }
}

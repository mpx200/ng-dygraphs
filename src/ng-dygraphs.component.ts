import { Component, Input, ElementRef, OnInit, OnChanges, ViewChild } from '@angular/core';
import { DygraphOptions } from './dygraphOptions';

declare const Dygraph: any;

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
export class NgDygraphsComponent implements OnInit, OnChanges {
  @Input() options: DygraphOptions;
  @Input() data: any;
  @Input() customVisibility: boolean;
  @ViewChild('chart') chart: ElementRef;

  public loadingInProgress: boolean;
  public chartWidth: number;
  public chartHeight: number;
  public labels: string[];

  private _g: any;

  constructor() { }

  ngOnInit() {
    this.chartWidth = (this.options && this.options.width) || 640;
    this.chartHeight = (this.options && this.options.height) || 480;
  }

  /**
   * ngOnChanges
   * @method ngOnChanges
   * @return {void}
   */
  ngOnChanges() {
    if (!this.data || !this.data.length) {
      this.loadingInProgress = false;
      return;
    };

    this.loadingInProgress = true;

    const options = Object.assign({}, this.options);

    if (!options.width) { options.width = this.chartWidth; }
    if (!options.height) { options.height = this.chartHeight; }
    if (!options.legend) { options.legend = 'always'; }

    const initialVisibility: boolean[] = [];
    if (options.labels) {
      if (this.customVisibility && options.labels.length > 1) {
        // options.labels[0] is always X axis
        this.labels = options.labels.slice(1);
      }

      options.labels.forEach(_ => {
        initialVisibility.push(true);
      });
    }
    if (options.labels) { options.visibility = initialVisibility; }

    setTimeout(() => {
      this._g = new Dygraph(this.chart.nativeElement,
        this.data,
        options
      );
      this.loadingInProgress = false;
    }, 500);
  }

  changeVisibility(el: any) {
    const elem = el.currentTarget;
    this._g.setVisibility(parseInt(elem.id, 10), elem.checked);
  }
}

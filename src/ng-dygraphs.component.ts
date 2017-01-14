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
    lodingInProgress: boolean = true;
    constructor(private renderer: Renderer) {
    }
    /**
     * ngOnChanges
     * @method ngOnChanges
     * @return {void}
     */
    ngOnChanges() {
        if (this.data === undefined || this.data.length === 0) {return; };
        this.lodingInProgress = true;
        let initialVisibility: any[] = [];
        this.labels.forEach(a => {
            initialVisibility.push(true);
        });
        setTimeout(() => {
            this.g = new Dygraph(this.chart.nativeElement,
                this.data,
                {
                    labels: this.labels,
                    ylabel: this.ylabel,
                    xlabel: this.xlabel,
                    legend: this.legend,
                    animatedZooms: this.animatedZooms,
                    title: this.title,
                    visibility: initialVisibility,
                    axes: this.axes,
                    pointSize: this.pointSize
                }
            );
            this.lodingInProgress = false;
        }, 500);
    }

    changeVisibility(el: any) {
        let elem = el.currentTarget;
        this.g.setVisibility(parseInt(elem.id), elem.checked);
    }
}

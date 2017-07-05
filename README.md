# ng-dygraphs
Angular 2+ and 4+ library for support of dygraphs(http://dygraphs.com) charts.

https://travis-ci.org/mpx200/ng-dygraphs.svg?branch=master

## Supported features of dygraphs
Then only thing you will need to pass are `data` and `options` (for detailed information look at http://dygraphs.com/options.html).

 ```js
  data 
  // data property needs to be defined as attribute in the component and in native array format http://dygraphs.com/data.html#array
  // data = [[new Date("2008/05/07"), 75],
  //        [new Date("2008/05/08"), 70],
  //        [new Date("2008/05/09"), 80]
  //       ];
  options
  // options object needs to be defined as attribute in the component and consist of valid options http://dygraphs.com/options.html
  // options = {width: 'auto', labels: ['x','y'], xlabel: 'x', ylabel: 'y', animatedZooms: true, pointSize: 4}
```

## Custom features
 ```js
  // posibility to turn on/off some of chart values http://dygraphs.com/tests/visibility.html, default value is 'false'
  customVisibility

  // define size of chart
  chartWidth // default value is 640
  chartHeight // default value is 480

  // define custom message when there is no data
  noDataLabel // default value is 'NO DATA AVAILABLE'
  
```

## Installation

First install dygraphs library

```bash
$ npm install dygraphs --save
```
then install ng-dygraphs

```bash
$ npm install ng-dygraphs --save
```

## Usage
 
and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import ng-dygraphs library
import { NgDygraphsModule } from 'ng-dygraphs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify NgDygraphsModule library as an import
    NgDygraphsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once ng-dygraphs library is imported, you can use ng-dygraphs component in your Angular application:

```html
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<!-- data property needs to be  defined in your controller and in native array format http://dygraphs.com/data.html#array
  
  data = [[new Date("2008/05/07"), 75],
          [new Date("2008/05/08"), 70],
          [new Date("2008/05/09"), 80]
         ];
  
  options = {width: 'auto', labels: ['Date','Temperature'], xlabel: 'X label text', ylabel: 'Y label text', title: 'Working title :)', animatedZooms: true, pointSize: 4}
-->
<ng-dygraphs
  [data]="data"
  [options]="options"
</ng-dygraphs>
```

## Additional settings to include this library with angular-cli

in angular-cli.json
```json
    "styles": [
        "styles.css",
        "../node_modules/dygraphs/dist/dygraph.css"
      ],
      "scripts": [
       "../node_modules/dygraphs/dist/dygraph.js",
       "../node_modules/ng-dygraphs/lib/index.js"
      ],
```


## Additional settings to include this library in your angular2+ project
example of integration with one of most popular angular2 seeds https://github.com/mgechev/angular-seed/

in /tools/config/project.config.ts
```typescript
    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
     { src: 'dygraphs/dist/dygraph.js', inject: 'libs' },
     //for version "dygraphs": "1.1.1" use this bellow
     //{ src: 'dygraphs/dygraph-combined.js', inject: 'libs' },
      { src: 'dygraphs/dist/dygraph.css', inject: true, vendor: true }
    ];
    
    this.mergeObject(this.SYSTEM_BUILDER_CONFIG, {
      packages: {
        'ng-dygraphs' : {
          main:'lib/index.js',
          defaultExtension: 'js'
        }
      }
    });
      // Add packages (e.g. ng2-translate)
    let additionalPackages: ExtendPackages[] = [{
      name: 'ng-dygraphs',
      // Path to the package's bundle
      path: 'node_modules/ng-dygraphs/lib/index.js'
    }];
    this.addPackagesBundles(additionalPackages);
    
   //in older version of seed you may try this code bellow 
   // this.mergeObject(this.SYSTEM_CONFIG_DEV, {
   // paths: {
   //   'ng-dygraphs': 'node_modules/ng-dygraphs/lib/index.js'
   // }
   // });
```

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## Docker

You can check out Ludwig's docker ng-dygraph with angular-cli integration.
https://hub.docker.com/r/ludwigprager/ng-dygraph-cli/


## License

MIT © [Ivan Stepić](stepicivan@gmail.com)

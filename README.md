# ng-dygraphs
Angular 2+ library for basic support of dygraphs(http://dygraphs.com) charts

## Supported features of dygraphs 
(for detailed information look at http://dygraphs.com/options.html)

 ```typescript
   data 
 //data property needs to be  defined in your controller and in native array format http://dygraphs.com/data.html#array
  //data = [[new Date("2008/05/07"), 75],
  //        [new Date("2008/05/08"), 70],
  //        [new Date("2008/05/09"), 80]
  //       ];
   title
   labels
   xlabel
   ylabel
   axes
   animatedZooms
   legend   // default value is 'always'
   pointSize
```

## Custom features
 ```typescript
  customVisibility //posibility to turn on/off some of chart values http://dygraphs.com/tests/visibility.html, default value is 'false'
  //define size of chart
  chartWidth: number = 640; // default value is 640
  chartHeight: number = 480; // default value is 480
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

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<!-- data property needs to be  defined in your controller and in native array format http://dygraphs.com/data.html#array
  
  data = [[new Date("2008/05/07"), 75],
          [new Date("2008/05/08"), 70],
          [new Date("2008/05/09"), 80]
         ];
-->
<ng-dygraphs
  [data]="data"
  [labels]="['Date','Temperature']"
  [ylabel]="'Y label text'"
  [xlabel]="'X label text'"
  [animatedZooms] ="true"
  [title]="'Working title :)'"
  [pointSize]="4">
</ng-dygraphs>
```

## Additional settings to include this library with angular-cli

in angular-cli.json
```typescript
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
$ gulp build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Ivan Stepić](stepicivan@gmail.com)

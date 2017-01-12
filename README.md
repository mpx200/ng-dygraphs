WIP:not yet deployed to NPM

# ng-dygraphs

## Installation

To install ng-dygraphs library, run:

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
<ng-dygraphs 
  [data]="data" 
  [lineNames]="['Value bar 1', 'Value bar 2']" 
  [ylabel]="Y label text" 
  [xlabel]="X label text" 
  [pointSize]="4">
</ng-dygraphs>
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

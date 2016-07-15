# angular-truncate-filter
An AngularJS truncation filter, that truncates text strings to a set number of characters with a custom ellipsis.

## How to use my truncate filter

###Include the javascript min file within your HTML.

``` html
<script src="src/truncate.min.js"></script>
```

### Inject `truncate` module into your application module

```javascript
angular.module('App', ['truncate']);
```

Truncate filter takes 3 parameters:

```html
truncate:numberOfCharacters:wordBreak:customEllipsis
```

### Then apply truncation to an AngularJS expression.

```javascript
{{ scopeVariable | truncation:10:true:"---" }}
ng-repeat="word in scopeVariable | truncate:5:true"
```

By default, a standard "..." will be used if a custom ellipsis is not passed.
```html
 {{ scopeVariable | truncation:10 }}
 ```
#### Coming soon
 * Word truncation

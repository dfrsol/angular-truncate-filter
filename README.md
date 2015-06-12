# angular-truncate-filter
A custom angular truncation filter

## Usage

Inject truncation module into your application

```javascript
angular.module('App', ['truncate']);
```

Truncate filter takes 3 parameters:

```html
truncate:numberOfCharacters:wordBreak:customEllipsis
```
Note: Truncate has a default "..." ellipsis if one is not passed in as a parameter.

Then apply truncation to an AngularJS expression.

```javascript
{{ scopeVariable | truncation:10:true:"---" }} || ng-repeat="word in scopeVariable | truncate:5:true"
```

## Build

```
grunt
```
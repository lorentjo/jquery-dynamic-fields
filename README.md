# jquery-dynamic-fields

A jQuery plugin for dynamic fields

# THIS README IS NOT FINISHED YET

## Example

`gif here`
You can see the example in the `sample` folder.

## Usage

Create your `<form>`, `<div>`, `<span>` and everything else with `data-role="dynamic-fields"`
```html
<div data-role="dynamic-fields">
	...
</div>
```

A very basic example:
```html
<!DOCTYPE html>
<html>
	<head>
		<title>jQuery Dynamic Fields Sample</title>
		<script src="https://code.jquery.com/jquery-1.11.2.min.js"></script> <!-- Don't forget your jQuery -->
		<script src="assets/js/jquery.dynamic.fields.js"></script> <!-- jquery dynamic fields file -->
	</head>
	<body>
		<form action="." method="get"> <!-- No, you don't need form to make a dynamic fields. -->
			<div data-role="dynamic-fields"> <!-- Your dynamics fields container. -->
				<div>
					<!-- Your button to add a new field. -->
					<!-- Class 'dynamic-fields-button-add' is a default class for add new button. -->
					<!-- You can always specify your button in the configuration (must config in js) -->
					<button class="dynamic-fields-button-add">Add New</button>
					<!-- Make sure if you use 'dynamic-fields-button-add' class, the button must inside the container -->
				</div>
				<!-- Your Field template. -->
				<!-- All of your new field will be like this template -->
				<!-- Class 'dynamic-fields-template' is default class for the template -->
				<!-- You can always specify your template in the configuration (must config in js) -->
				<div class="dynamic-fields-template">
					<input style="width: 80%;" type="text" name="input[]" placeholder="Input"/>
					<!-- The Remove Button(or whatever). -->
					<!-- You must use data-role="remove-field" attribute to specify this button -->
					<a href="#" data-role="remove-field" style="width: 10%; float: right;">Remove</a>
					<!-- Make sure your remove button is inside the template or your button will be useless, or even error -->
				</div>
				<!-- Make sure if you use 'dynamic-fields-template' class, the button must inside the container -->
			</div>
		</form>
	</body>
</html>
```
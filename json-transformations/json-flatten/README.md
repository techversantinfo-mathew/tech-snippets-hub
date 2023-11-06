# Simple JSON Flatten - JavaScript Version

## Description
This JavaScript function (`flattenJson`) flattens a nested JSON object into a single-level object with key paths as keys.

## Usage
- Import or include the `flattenJson` function in your script.
- Pass a nested JSON object to the function.
- The function will return a single-level object with flattened key paths.

## Example
Given a JSON object like:
```json
{
    "Name": "John",
    "Location": {
        "City": "Los Angeles",
        "State": "CA"
    },
    "Numbers": [1, 2, 3]
}
```

The output will be:
```json
{
    "Name": "John",
    "Location_City": "Los Angeles",
    "Location_State": "CA",
    "Numbers_0": 1,
    "Numbers_1": 2,
    "Numbers_2": 3
}
```